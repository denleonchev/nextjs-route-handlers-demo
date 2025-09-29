export const dynamic = 'force-static';
export const revalidate = 10; // Revalidate every 10 seconds
export async function GET() {
    return Response.json({ time: new Date().toISOString() });
}
