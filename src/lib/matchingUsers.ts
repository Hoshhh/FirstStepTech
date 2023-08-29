import { NextRequest, NextResponse } from "next/server";
import { db } from '@/lib/db'

// Skill matching middleware
const findMatchingUsers = async (request: NextRequest, response: NextResponse) => {
    try {
        const body = await request.json();
        const skills = JSON.parse(body.skills);

        // Store the matching users in matchingUsers
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
                
            }
        });
        NextResponse.next();
    } catch (error) {
        
    }
};