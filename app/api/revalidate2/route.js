 
export default async function handler(request, res) {
    await res.revalidate('/test')
    await res.revalidate('/example1')
    
    return Response.json({ revalidated: true, now: Date.now() })
}