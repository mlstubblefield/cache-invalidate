import { revalidatePath } from "next/cache";
export const runtime = "edge";

export async function GET(request, res) {
  revalidatePath("/test");
  revalidatePath("/example1");

  return Response.json({ revalidated: true, now: Date.now() });
}
