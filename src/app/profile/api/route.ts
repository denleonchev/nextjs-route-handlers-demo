import { headers } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    // const headers = new Headers(request.headers);
    // const auth = headers.get("Authorization");
    const auth = (await headers()).get("Authorization")

    return new Response(`<h1>Authorization: ${auth}</h1>`, {
        headers: {
            "Content-type": "text/html"
        }
    })
}