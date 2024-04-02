"use client"
import { revalidatePath, revalidateTag } from "next/cache";

export default function RevalidateButton() {
  function revalidate() {
    revalidatePath("/test");
    revalidatePath("/example1");
  }
  return <button onClick={revalidate}>Revalidate</button>;
}
