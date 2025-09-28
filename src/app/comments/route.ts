import { comments } from "./data"

export async function GET() {
    return Response.json(comments);
}

export async function POST(request: Request) {
    const commentBody = await request.json();
    const newComment = { ...commentBody, id: comments.length + 1};
    comments.push(newComment);

    return new Response(JSON.stringify(newComment), {
        headers: { "Content-Type": "application/json"},
        status: 201,
    });
}
