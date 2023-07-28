import { NextRequest, NextResponse } from "next/server";
import { db } from '@/lib/db'

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {

    const origin = request.headers.get('origin')
    try {
        const currentUser = await db.user.findUnique({
            where: {
                id: params.id
            }
        })

        return new NextResponse(JSON.stringify(currentUser), {
            headers: {
                'Access-Control-Allow-Origin': origin || "*",
                'Content-Type': 'application/json'
            }
        })
    } catch (error) {
        return new NextResponse("Database error", {status: 500})
    }
}