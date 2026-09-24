import { NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/admin-auth";
import {
  cleanText,
  deleteUploadedFile,
  isValidCategory,
  readGallery,
  writeGallery,
} from "@/lib/gallery-store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function unauthorizedResponse() {
  return NextResponse.json({ error: "Please sign in to continue." }, { status: 401 });
}

async function findItem(id) {
  const items = await readGallery();
  const itemIndex = items.findIndex((item) => item.id === id);

  return { items, itemIndex };
}

export async function PATCH(request, { params }) {
  if (!isAdminRequest(request)) {
    return unauthorizedResponse();
  }

  const { id } = await params;
  const payload = await request.json().catch(() => null);

  if (!payload || typeof payload !== "object") {
    return NextResponse.json({ error: "Invalid update." }, { status: 400 });
  }

  const { items, itemIndex } = await findItem(id);
  if (itemIndex === -1) {
    return NextResponse.json({ error: "Gallery item not found." }, { status: 404 });
  }

  const currentItem = items[itemIndex];
  const title =
    payload.title === undefined ? currentItem.title : cleanText(payload.title);
  const alt = payload.alt === undefined ? currentItem.alt : cleanText(payload.alt, 160);
  const category =
    payload.category === undefined
      ? currentItem.category
      : cleanText(payload.category, 40);
  const published =
    payload.published === undefined ? currentItem.published : payload.published;

  if (!title || !alt || !isValidCategory(category) || typeof published !== "boolean") {
    return NextResponse.json(
      { error: "Add a title, image description and valid category." },
      { status: 400 },
    );
  }

  const item = {
    ...currentItem,
    title,
    alt,
    category,
    published,
    updatedAt: new Date().toISOString(),
  };
  items[itemIndex] = item;
  await writeGallery(items);

  return NextResponse.json({ item });
}

export async function DELETE(request, { params }) {
  if (!isAdminRequest(request)) {
    return unauthorizedResponse();
  }

  const { id } = await params;
  const { items, itemIndex } = await findItem(id);

  if (itemIndex === -1) {
    return NextResponse.json({ error: "Gallery item not found." }, { status: 404 });
  }

  const [item] = items.splice(itemIndex, 1);
  await writeGallery(items);
  await deleteUploadedFile(item.image);

  return NextResponse.json({ ok: true });
}
