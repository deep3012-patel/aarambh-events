import { readGallery } from "@/lib/gallery-store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const items = await readGallery();

  return Response.json(
    { items: items.filter((item) => item.published) },
    { headers: { "Cache-Control": "no-store" } },
  );
}
