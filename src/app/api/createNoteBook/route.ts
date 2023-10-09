// map to /api/createNoteBook

import { auth } from '@clerk/nextjs'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
    const { userId } = auth(); // get the user id from the request

    if(!userId) {
        return new NextResponse('unauthorised', {status: 401})
    }

    const body = await req.json(); // convert the request body into json and get the body of the request
    const { name } = body
    
}