import { NextRequest, NextResponse } from "next/server";
import { db } from '@/lib/db'
import { getCurrentSession } from "@/lib/session";
import { infoSchema } from "@/lib/validations/info";

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
        const payload = infoSchema.parse(body)


        const updateName = await db.user.update({
            where: {
                id: params.id
            },
            data: {
                firstName: payload.firstName,
                lastName: payload.lastName,
                role: payload.role
            }
        })

        //If the user is a Developer, create a new skill table for them
        if (payload.role === "DEV") {
            await db.skills.create({
                data: {
                    authorId: session.user.id,
                    skill1: null,
                    skill2: null,
                    skill3: null,
                    skill4: null,
                    skill5: null,
                    skill6: null,
                }
            })
        }

        return new Response(JSON.stringify(updateName), {
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