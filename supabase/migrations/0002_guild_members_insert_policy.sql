-- Allow signed-in members to add to the roster from the dashboard.
-- There's no separate officer/admin role yet, so this is scoped to any
-- authenticated user, matching the read policy in 0001.
create policy "Authenticated users can add roster members"
  on public.guild_members
  for insert
  to authenticated
  with check (true);
