import { revalidatePath } from 'next/cache'
 
export async function GET(request) {
    revalidatePath('/test')
    revalidatePath('/example1')
    return Response.json({ revalidated: true, now: Date.now() })
}