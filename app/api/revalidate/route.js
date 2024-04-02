import { revalidatePath } from 'next/cache'
 
export async function GET(request) {
    revalidatePath('/test')
    return Response.json({ revalidated: true, now: Date.now() })
}