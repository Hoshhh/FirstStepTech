import { NextResponse } from "next/server"

const allowedOrigins = process.env.NODE_ENV === 'production'
    ? ['https://www.firststeptech.com', 'https://firststeptech.com']
    : ['http://localhost:3000']

export function middleware(request: Request) {
    const origin = request.headers.get('origin')

    //Add "|| !origin" in production to block postman, etc from accessing the API
    if (origin && !allowedOrigins.includes(origin)) {
        return new NextResponse(null, {
            status: 400,
            statusText: "Bad Request",
            headers: {
                'Content-Type': 'text/plain'
            }
        })
    }
}

export const config = {
    matcher: '/api/:path*',
}