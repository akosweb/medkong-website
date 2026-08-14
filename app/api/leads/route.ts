import { NextResponse } from 'next/server';
import { getLeadsClient, leadEnvironment } from '@/lib/supabase';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/** Field caps — generous for humans, tight enough to bound what gets stored. */
const LIMITS = {
  name: 200,
  email: 320,
  phone: 60,
  organization: 200,
  message: 5000,
} as const;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Payload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  organization?: unknown;
  message?: unknown;
  modules?: unknown;
};

function text(value: unknown, max: number): string {
  return typeof value === 'string' ? value.trim().slice(0, max) : '';
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: 'Expected a JSON body.' }, { status: 400 });
  }

  const name = text(body.name, LIMITS.name);
  const email = text(body.email, LIMITS.email);

  if (!name) return NextResponse.json({ error: 'Please include your name.' }, { status: 400 });
  if (!EMAIL.test(email)) {
    return NextResponse.json({ error: 'Please include a valid work email.' }, { status: 400 });
  }

  const modules = Array.isArray(body.modules)
    ? body.modules.filter((m): m is string => typeof m === 'string').slice(0, 20).map((m) => m.slice(0, 120))
    : [];

  const supabase = getLeadsClient();
  if (!supabase) {
    console.error('[leads] LEADS_SUPABASE_URL / LEADS_SUPABASE_SERVICE_ROLE_KEY are not configured.');
    return NextResponse.json(
      { error: 'The form is temporarily unavailable. Please email hello@akos.ai instead.' },
      { status: 503 }
    );
  }

  const { error } = await supabase.from('leads').insert({
    source: 'medkong-website',
    environment: leadEnvironment(),
    name,
    email,
    phone: text(body.phone, LIMITS.phone) || null,
    organization: text(body.organization, LIMITS.organization) || null,
    message: text(body.message, LIMITS.message) || null,
    modules,
    referrer: request.headers.get('referer'),
    user_agent: request.headers.get('user-agent')?.slice(0, 500) ?? null,
    page_url: request.headers.get('referer'),
  });

  if (error) {
    // Log the real reason, tell the visitor something useful and non-specific.
    console.error('[leads] insert failed:', error.message);
    return NextResponse.json(
      { error: "We couldn't save that just now. Please try again, or email hello@akos.ai." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
