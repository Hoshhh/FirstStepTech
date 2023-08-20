import { NextRequest, NextResponse } from "next/server";
import { db } from '@/lib/db'
import { getCurrentSession } from "@/lib/session";

export async function POST(request: NextRequest, { params }: { params: { id: string } }) {
    const origin = request.headers.get('origin')

    try {
        //Check if the user is authenticated and has access to this user
        const session = await getCurrentSession()
        if (!session?.user || params.id !== session?.user.id || session?.user.role !== "REC") {
            return new NextResponse(null, { status: 403})
        }

        //Get the request body and validate it
        const body = await request.json()

        const createJob = await db.jobPost.create({
            data: {
                authorId: session.user.id,
                postition: body.postition,
                company: body.company,
                skills: body.skills,
                location: body.location,
                workplace: body.workplace,
            },
            select: {
                id: true,
            }
        })

        return new Response(JSON.stringify(createJob), {
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