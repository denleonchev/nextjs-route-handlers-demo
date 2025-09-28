import { comments } from "../data"

export async function GET(_request: Request, { params }: { params: Promise<{id: string }>}) {
    const { id } = await params;
    const foundComment = comments.find((comment) => comment.id === parseInt(id))

    return Response.json(foundComment);
}

export async function PATCH(request: Request, { params }: { params: Promise<{id: string }>}) {
    const patchBody = await request.json();
    const { id } = await params;
    const foundComment = comments.find((comment) => comment.id === parseInt(id))
    if (foundComment) {
        foundComment.text = patchBody.text;
    }

    return Response.json(foundComment);
}
