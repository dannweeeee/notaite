import { db } from '@/lib/db';
import { $notes } from '@/lib/db/schema';
import { generateImage, generateImagePrompt } from '@/lib/openai';
import { auth } from '@clerk/nextjs'
import { NextResponse } from 'next/server'

// map to /api/createNoteBook

export const runtime = "edge";

export async function POST(req: Request) {
    const { userId } = auth(); // get the user id from the request

    if(!userId) {
        return new NextResponse('unauthorised', { status: 401 });
    }

    const body = await req.json(); // convert the request body into json and get the body of the request
    const { name } = body;

    const image_description = await generateImagePrompt(name);
    if (!image_description) {
        return new NextResponse("Failed to generate image description. Please try again.", {
          status: 500,
        });
    }
    const image_url = await generateImage(image_description);
    if(!image_url) {
        return new NextResponse("Failed to generate image. Please try again.", {
            status: 500,
        });
    }

    const note_ids = await db
        .insert($notes)
        .values({
            name,
            userId,
            imageUrl: image_url,
        }).returning({
            insertedId: $notes.id,
        });

    return NextResponse.json({
        note_id: note_ids[0].insertedId,
    })
}