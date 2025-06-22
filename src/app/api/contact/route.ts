import { NextResponse } from "next/server";

interface ContactRequestBody {
  name: string;
  email: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactRequestBody;
    const { name, email, message } = body;

    // Validate input
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "All fields are required." }),
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        message: "Message sent successfully!",
      },
      { 
        status: 200 
      }
    );
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Failed to send message";
    return NextResponse.json(
      {
        message: errorMessage,
      },
      {
        status: 500,
      }
    );
  }
}
