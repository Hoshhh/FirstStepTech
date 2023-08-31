
import { NextRequest, NextResponse } from "next/server";
import { db } from '@/lib/db'
import { getCurrentSession } from "@/lib/session";
import { jobBackSchema } from "@/lib/validations/job";

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
    const origin = request.headers.get('origin')

    try {
        //Check if the user is authenticated and has access to this user
        const session = await getCurrentSession()
        if (!session?.user || params.id !== session?.user.id || session?.user.role !== "REC") {
            return new NextResponse(null, { status: 403})
        }

        //Get the request body and validate it
        const body = await request.json();
        const skills = JSON.parse(body.skills);

        const matchingUsers = await db.user.findMany({
            where: {
                //Fill in after rewrite
                OR: [
                    { skills: {skill1: { in: skills } }},
                    { skills: {skill2: { in: skills } }},
                    { skills: {skill3: { in: skills } }},
                    { skills: {skill4: { in: skills } }},
                    { skills: {skill5: { in: skills } }},
                    { skills: {skill6: { in: skills } }}
                ]
            },
            select: {
                id: true
            }
        });

        const updateApplicants = await db.jobPost.update({
            where: {
                id: params.id //Need to get job ID
            },
            data: {
                applicants: {connect: matchingUsers}             
            },
        })

        return new Response(JSON.stringify(updateApplicants), {
            headers: {
                'Access-Control-Allow-Origin': origin || "*",
                'Content-Type': 'application/json'
            },
            status: 200
        })

    } catch (error) {
        console.error("Error:", error);
        return new NextResponse("Database error", {status: 500})
    }
}



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
        const payload = jobBackSchema.parse(body)

        const skills = JSON.parse(body.skills);
        const matchingUsers = await db.user.findMany({
            where: {
                //Fill in after rewrite
                OR: [
                    { skills: {skill1: { in: skills } }},
                    { skills: {skill2: { in: skills } }},
                    { skills: {skill3: { in: skills } }},
                    { skills: {skill4: { in: skills } }},
                    { skills: {skill5: { in: skills } }},
                    { skills: {skill6: { in: skills } }}
                ]
            },
            select: {
                id: true
            }
        });
        console.log(matchingUsers)
        const createJob = await db.jobPost.create({
            data: {
                authorId: session.user.id,
                postition: payload.position,
                company: payload.company,
                skills: payload.skills,
                workplace: payload.workplace,
                location: payload.location, 
                applicants: {connect: matchingUsers}             
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
        console.error("Error:", error);
        return new NextResponse("Database error", {status: 500})
    }
}