import { createClient } from '@supabase/supabase-js';

/**
 * Server-only Supabase client for lead capture.
 *
 * Leads land in the `medkong` schema of the shared AKOS Toolkit ("arsenal")
 * project — see supabase/migrations/0001_medkong_schema.sql. That table has RLS
 * on with no policies, so the service-role key is the only way in. It must
 * never reach the browser: this module is imported exclusively from
 * app/api/leads/route.ts.
 */

const url = process.env.LEADS_SUPABASE_URL || process.env.SUPABASE_URL_PROD;
const serviceRoleKey =
  process.env.LEADS_SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY_PROD;

type LeadsClient = ReturnType<typeof makeClient>;

function makeClient(url: string, key: string) {
  return createClient(url, key, {
    db: { schema: 'medkong' },
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

let client: LeadsClient | null = null;

/**
 * Returns the leads client, or null when credentials aren't configured.
 *
 * Null rather than throwing at import time so `next build` and a
 * credentials-free local run still work — the route turns it into a clean 503.
 */
export function getLeadsClient(): LeadsClient | null {
  if (!url || !serviceRoleKey) return null;
  if (!client) client = makeClient(url, serviceRoleKey);
  return client;
}

/** Tags rows so local and preview submissions are easy to filter out. */
export function leadEnvironment(): string {
  if (process.env.VERCEL_ENV) return process.env.VERCEL_ENV; // production | preview | development
  return process.env.NODE_ENV === 'production' ? 'production' : 'development';
}
