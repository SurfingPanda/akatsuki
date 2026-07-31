"use server";

import { revalidatePath } from "next/cache";

import { createClient } from "@/lib/supabase/server";

export async function addGuildMember(formData: FormData) {
  const name = String(formData.get("name") ?? "").trim();
  const ign = String(formData.get("ign") ?? "").trim();
  const job = String(formData.get("job") ?? "").trim();
  const rank = String(formData.get("rank") ?? "Member").trim() || "Member";
  const levelRaw = String(formData.get("level") ?? "").trim();
  const level = levelRaw ? Number(levelRaw) : null;

  if (!name || !ign || !job) {
    return { error: "Name, IGN, and Job are required." };
  }
  if (level !== null && (!Number.isInteger(level) || level < 1 || level > 99)) {
    return { error: "Level must be a whole number between 1 and 99." };
  }

  const supabase = await createClient();
  const { error } = await supabase
    .from("guild_members")
    .insert({ name, ign, job, rank, level });

  if (error) {
    return { error: error.message };
  }

  revalidatePath("/dashboard/roster");
  revalidatePath("/dashboard");
  return { error: null };
}
