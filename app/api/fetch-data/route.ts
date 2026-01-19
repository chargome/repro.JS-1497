import * as Sentry from "@sentry/nextjs";

export const dynamic = "force-dynamic";

export async function GET() {
  Sentry.logger.info("Tracing test API called");

  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await response.json();

  return Response.json(data);
}
