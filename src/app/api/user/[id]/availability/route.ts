import { NextRequest, NextResponse } from "next/server";
import { db } from '@/lib/db'
import { getCurrentSession } from "@/lib/session";

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
    const origin = request.headers.get('origin')

    try {
        //Check if the user is authenticated and has access to this user
        const session = await getCurrentSession()
        if (!session?.user || params.id !== session?.user.id) {
            return new NextResponse(null, { status: 403})
        }

        //Get the request body and validate it
        const body = await request.json()

        const updateAvailability = await db.user.update({
            where: {
                id: params.id
            },
            data: {
                availability: body.availability
            }
        })

        return new Response(JSON.stringify(updateAvailability), {
            headers: {
                'Access-Control-Allow-Origin': origin || "*",
                'Content-Type': 'application/json'
            },
            status: 200
        })

    } catch (error) {
        return new NextResponse("Database error", {status: 500})
    }
}