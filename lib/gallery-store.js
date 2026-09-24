import { randomUUID } from "node:crypto";
import { mkdir, readFile, rename, unlink, writeFile } from "node:fs/promises";
import path from "node:path";
import { defaultGalleryItems, galleryCategories } from "@/lib/gallery-data";

const DATA_DIRECTORY = path.join(process.cwd(), "data");
const GALLERY_FILE = path.join(DATA_DIRECTORY, "gallery.json");
const UPLOAD_DIRECTORY = path.join(process.cwd(), "public", "uploads", "gallery");
const UPLOAD_URL_PREFIX = "/uploads/gallery/";

function cloneDefaultItems() {
  return defaultGalleryItems.map((item) => ({ ...item }));
}

function isStoredItem(item) {
  return (
    item &&
    typeof item.id === "string" &&
    typeof item.image === "string" &&
    typeof item.title === "string" &&
    typeof item.alt === "string" &&
    galleryCategories.includes(item.category) &&
    typeof item.published === "boolean"
  );
}

export function isValidCategory(category) {
  return galleryCategories.includes(category);
}

export function cleanText(value, maxLength = 120) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export function titleFromFilename(filename) {
  const name = path.parse(filename || "").name;
  const cleaned = name.replace(/[_-]+/g, " ").replace(/\s+/g, " ").trim();

  return cleaned
    ? cleaned.replace(/\b\w/g, (character) => character.toUpperCase()).slice(0, 120)
    : "New Gallery Moment";
}

export async function readGallery() {
  try {
    const contents = await readFile(GALLERY_FILE, "utf8");
    const gallery = JSON.parse(contents);

    if (Array.isArray(gallery) && gallery.every(isStoredItem)) {
      return gallery;
    }
  } catch (error) {
    if (error.code !== "ENOENT") {
      console.error("Could not read gallery data.", error);
    }
  }

  return cloneDefaultItems();
}

export async function writeGallery(items) {
  await mkdir(DATA_DIRECTORY, { recursive: true });

  const temporaryFile = `${GALLERY_FILE}.${randomUUID()}.tmp`;
  await writeFile(temporaryFile, `${JSON.stringify(items, null, 2)}\n`, "utf8");
  await rename(temporaryFile, GALLERY_FILE);
}

export async function saveUploadedFile(file, extension) {
  await mkdir(UPLOAD_DIRECTORY, { recursive: true });

  const filename = `${randomUUID()}.${extension}`;
  await writeFile(path.join(UPLOAD_DIRECTORY, filename), Buffer.from(await file.arrayBuffer()));

  return `${UPLOAD_URL_PREFIX}${filename}`;
}

export async function deleteUploadedFile(image) {
  if (!image?.startsWith(UPLOAD_URL_PREFIX)) {
    return;
  }

  const filename = path.basename(image);
  await unlink(path.join(UPLOAD_DIRECTORY, filename)).catch((error) => {
    if (error.code !== "ENOENT") {
      console.error("Could not remove gallery image.", error);
    }
  });
}

export function createGalleryItem({ image, title, category, alt, published = true }) {
  return {
    id: randomUUID(),
    image,
    title,
    category,
    alt: alt || title,
    published,
    createdAt: new Date().toISOString(),
  };
}
