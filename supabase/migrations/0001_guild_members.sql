-- Guild roster table
create table if not exists public.guild_members (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  ign text not null,
  job text not null,
  rank text not null default 'Member',
  level integer,
  created_at timestamptz not null default now()
);

alter table public.guild_members enable row level security;

-- Roster is only ever queried from the /dashboard, which already requires
-- a signed-in session, so gate reads on "authenticated" rather than opening
-- it up to the public "anon" role.
create policy "Authenticated users can view roster"
  on public.guild_members
  for select
  to authenticated
  using (true);

-- Starter roster matching the officers already shown on the landing page.
insert into public.guild_members (name, ign, job, rank, level) values
  ('Yahiko', 'Yahiko', 'Imperial Guard', 'Guild Leader', 99),
  ('Konan', 'Konan', 'Shadow Cross', 'Vice Leader', 99),
  ('Nagato', 'Nagato', 'Meister', 'WoE Commander', 98),
  ('Itachi', 'Itachi', 'Shadow Chaser', 'Officer', 97);
