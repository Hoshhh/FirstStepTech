import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { db } from "@/lib/db";


export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(db),
    session: { 
        strategy: "jwt" 
    },
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        })
    ],
    callbacks: {
        async session({ token, session}) {
            if (token) {
                return {
                    ...session,
                    user: {
                        ...session.user,
                        id: token.id,
                        firstName: token.firstName,
                        lastName: token.lastName,
                        role: token.role
                    }
                }
            }

            return session
        },
        async jwt({ token, user }) {
            const dbUser = await db.user.findFirst({
                where: {
                    email: token.email
                },
            })

            if (!dbUser) {
                if (user) {
                    token.id = user?.id
                }

                return token
            }

            return {
                id: dbUser.id,
                email: dbUser.email,
                picture: dbUser.image,
                name: dbUser.name,
                firstName: dbUser.firstName,
                lastName: dbUser.lastName,
                role: dbUser.role
            }
        }
    }
}