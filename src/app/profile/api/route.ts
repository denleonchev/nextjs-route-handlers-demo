import { headers, cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    // const headers = new Headers(request.headers);
    // const auth = headers.get("Authorization");
    const auth = (await headers()).get("Authorization")
    const theme = request.cookies.get("theme");
    console.log("theme - ", theme);

    const cookieStore = await cookies();
    cookieStore.set('resultsPerPage', '20');
    console.log("resultsPerPage - ", cookieStore.get('resultsPerPage'));

    return new Response(`<h1>Authorization: ${auth}</h1>`, {
        headers: {
            "Content-type": "text/html",
            "Set-Cookie": "theme=dark"
        }
    })
}