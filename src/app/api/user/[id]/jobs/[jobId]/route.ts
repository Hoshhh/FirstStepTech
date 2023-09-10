import { NextRequest, NextResponse } from "next/server";
import { db } from '@/lib/db'
import { getCurrentSession } from "@/lib/session";
import { jobBackSchema } from "@/lib/validations/job";


export async function GET(request: Request, { params }: { params: { id: string } }) {

    const origin = request.headers.get('origin')

    try {
        const applicants = await db.jobPost.findUnique({
            where: {
                id: params.id
            },
            select: {
                applicants: {
                    select: {
                        id: true,
                        firstName: true,
                        lastName:  true,
                    }
                }
            }
        })

        return new Response(JSON.stringify(applicants), {
            headers: {
                'Access-Control-Allow-Origin': origin || "*",
                'Content-Type': 'application/json'
            },
            status: 200
        })
    } catch (error) {
        console.error("Database error:", error);
        return new Response("Database error", {status: 500})
    }
}