import { NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/admin-auth";
import {
  cleanText,
  createGalleryItem,
  deleteUploadedFile,
  isValidCategory,
  readGallery,
  saveUploadedFile,
  titleFromFilename,
  writeGallery,
} from "@/lib/gallery-store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const ALLOWED_IMAGE_TYPES = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
  "image/avif": "avif",
};
const MAX_FILE_SIZE = 8 * 1024 * 1024;
const MAX_FILES_PER_UPLOAD = 12;

function unauthorizedResponse() {
  return NextResponse.json({ error: "Please sign in to continue." }, { status: 401 });
}

export async function GET(request) {
  if (!isAdminRequest(request)) {
    return unauthorizedResponse();
  }

  return NextResponse.json(
    { items: await readGallery() },
    { headers: { "Cache-Control": "no-store" } },
  );
}

export async function POST(request) {
  if (!isAdminRequest(request)) {
    return unauthorizedResponse();
  }

  const formData = await request.formData();
  const files = formData
    .getAll("files")
    .filter(
      (file) =>
        file &&
        typeof file.arrayBuffer === "function" &&
        typeof file.name === "string" &&
        file.size > 0,
    );
  const category = cleanText(formData.get("category"), 40);
  const submittedTitle = cleanText(formData.get("title"));
  const submittedAlt = cleanText(formData.get("alt"), 160);
  const published = formData.get("published") === "true";

  if (!files.length) {
    return NextResponse.json({ error: "Choose at least one image." }, { status: 400 });
  }

  if (files.length > MAX_FILES_PER_UPLOAD) {
    return NextResponse.json(
      { error: `You can upload up to ${MAX_FILES_PER_UPLOAD} images at once.` },
      { status: 400 },
    );
  }

  if (!isValidCategory(category)) {
    return NextResponse.json({ error: "Choose a valid category." }, { status: 400 });
  }

  for (const file of files) {
    if (!ALLOWED_IMAGE_TYPES[file.type] || file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: "Use JPG, PNG, WEBP or AVIF images up to 8 MB each." },
        { status: 400 },
      );
    }
  }

  const uploadedImages = [];

  try {
    for (const file of files) {
      const image = await saveUploadedFile(file, ALLOWED_IMAGE_TYPES[file.type]);
      uploadedImages.push({ image, file });
    }

    const existingItems = await readGallery();
    const newItems = uploadedImages.map(({ image, file }) => {
      const title =
        files.length === 1 && submittedTitle
          ? submittedTitle
          : titleFromFilename(file.name);

      return createGalleryItem({
        image,
        title,
        category,
        alt: files.length === 1 && submittedAlt ? submittedAlt : title,
        published,
      });
    });

    const items = [...newItems, ...existingItems];
    await writeGallery(items);

    return NextResponse.json({ items: newItems }, { status: 201 });
  } catch (error) {
    await Promise.all(uploadedImages.map(({ image }) => deleteUploadedFile(image)));
    console.error("Could not save gallery upload.", error);

    return NextResponse.json(
      { error: "The images could not be saved. Please try again." },
      { status: 500 },
    );
  }
}
