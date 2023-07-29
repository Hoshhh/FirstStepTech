import { db } from '@/lib/db'

export async function GET(request: Request, { params }: { params: { id: string } }) {

    const origin = request.headers.get('origin')
    try {
        const currentUser = await db.user.findUnique({
            where: {
                id: params.id
            }
        })

        return new Response(JSON.stringify(currentUser), {
            headers: {
                'Access-Control-Allow-Origin': origin || "*",
                'Content-Type': 'application/json'
            }
        })
    } catch (error) {
        return new Response("Database error", {status: 500})
    }
}