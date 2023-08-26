import { NextRequest, NextResponse } from "next/server";
import { db } from '@/lib/db'
import { getCurrentSession } from "@/lib/session";
import { skillsSchema } from "@/lib/validations/skills";


export async function GET(request: Request, { params }: { params: { id: string } }) {

    const origin = request.headers.get('origin')
    try {
        const currentUser = await db.skills.findUnique({
            where: {
                authorId: params.id
            }
        })

        return new Response(JSON.stringify(currentUser), {
            headers: {
                'Access-Control-Allow-Origin': origin || "*",
                'Content-Type': 'application/json'
            },
            status: 200
        })
    } catch (error) {
        return new Response("Database error", {status: 500})
    }
}

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
        const payload = skillsSchema.parse(body)

        const updateSkills = await db.skills.update({
            where: {
                authorId: session.user.id
            },
            data: {
                skill1: payload.skills.skill1,
                skill2: payload.skills.skill2,
                skill3: payload.skills.skill3,
                skill4: payload.skills.skill4,
                skill5: payload.skills.skill5,
                skill6: payload.skills.skill6,
            }
        })

        return new Response(JSON.stringify(updateSkills), {
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