import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// export function middleware(request: NextRequest) {
//     return NextResponse.redirect(new URL("/", request.url))
// }

// export const config = {
//     matcher: "/profile"
// }

export function middleware(request: NextRequest) {
    const response = NextResponse.next();
    const themePreference = request.cookies.get("theme")?.value;

    if (!themePreference) {
        response.cookies.set("theme", "dark" );
    }

    response.headers.set("custom-header", "custom-value");
    
    return response
}
