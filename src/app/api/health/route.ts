import { connection } from "next/server";

export async function GET() {
  await connection();

  return Response.json({
    status: "online",
    timestamp: new Date().toISOString(),
    version: process.env.NEXT_PUBLIC_APP_VERSION ?? "1.0.0",
    environment: process.env.VERCEL_ENV ?? process.env.NODE_ENV,
  });
}