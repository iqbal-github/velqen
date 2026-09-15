import { NextResponse } from 'next/server';

// Placeholder endpoint: validates and acknowledges the message but does not
// send email yet. Wire this up to a real provider (e.g. Resend, SendGrid)
// before relying on it in production.
export async function POST(request) {
  const body = await request.json().catch(() => null);

  if (!body?.name || !body?.email || !body?.message) {
    return NextResponse.json({ error: 'Name, email and message are required.' }, { status: 400 });
  }

  return NextResponse.json({ ok: true });
}
