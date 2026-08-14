-- MEDKONG website — lead capture.
--
-- This lives in the shared AKOS Toolkit ("arsenal") Supabase project
-- (ref sgizuweopqywezpkumqt), in its own `medkong` schema, alongside the
-- existing `annex` / `crm` / `resource` schemas. The website only ever writes
-- here, and only from the server (see app/api/leads/route.ts).
--
-- Applied 2026-08-13.

create schema if not exists medkong;

create table if not exists medkong.leads (
  id           uuid primary key default gen_random_uuid(),
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now(),

  -- Where the lead came from. `environment` keeps local/preview test
  -- submissions from being mistaken for real ones.
  source       text not null default 'medkong-website',
  environment  text not null default 'production',

  name         text not null,
  email        text not null,
  phone        text,
  organization text,
  message      text,

  -- Module names the visitor selected in the demo dialog.
  modules      text[] not null default '{}',

  status       text not null default 'new',

  -- Request context, for attribution. No IP address is stored.
  page_url     text,
  referrer     text,
  user_agent   text,

  metadata     jsonb not null default '{}'::jsonb
);

create index if not exists leads_created_at_idx on medkong.leads (created_at desc);
create index if not exists leads_email_idx on medkong.leads (email);

-- RLS on with no policies: anon and authenticated get nothing. service_role
-- bypasses RLS, and it's the only key the website's server route uses.
alter table medkong.leads enable row level security;

grant usage on schema medkong to service_role;
grant all on all tables in schema medkong to service_role;
alter default privileges in schema medkong grant all on tables to service_role;

-- Explicitly keep the browser-facing roles out, even if the schema is exposed
-- through PostgREST.
revoke all on schema medkong from anon, authenticated;
revoke all on all tables in schema medkong from anon, authenticated;
