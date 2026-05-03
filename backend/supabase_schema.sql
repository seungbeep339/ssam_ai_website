-- Run this in your Supabase SQL editor to create the waitlist table

create table if not exists waitlist (
  id uuid default gen_random_uuid() primary key,
  email text not null unique,
  school text,
  created_at timestamptz default now() not null
);

-- Index for fast email lookups
create index if not exists waitlist_email_idx on waitlist (email);

-- Enable Row Level Security
alter table waitlist enable row level security;

-- Allow the backend (service role) to insert and select
-- The anon key can only insert (not read all entries)
create policy "Allow insert for all" on waitlist
  for insert with check (true);
