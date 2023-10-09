import { generateImagePrompt } from '@/lib/openai';
import { auth } from '@clerk/nextjs'
import { NextResponse } from 'next/server'

// map to /api/createNoteBook

export async function POST(req: Request) {
    const { userId } = auth(); // get the user id from the request

    if(!userId) {
        return new NextResponse('unauthorised', {status: 401})
    }

    const body = await req.json(); // convert the request body into json and get the body of the request
    const { name } = body

    const image_description = await generateImagePrompt(name);
    console.log({image_description});
    return new NextResponse('ok');
}