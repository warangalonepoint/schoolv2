import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase =
  url && anon ? createClient(url, anon, { auth: { persistSession: true } }) : null;

// Helpers with safe fallbacks
export async function getStudentForDemo() {
  if (!supabase) return null;
  // Try to find any student (demo). Replace with auth mapping when ready.
  const { data, error } = await supabase.from("students").select("*").limit(1);
  if (error) return null;
  return data?.[0] || null;
}

export async function getAttendanceSummary(student_id, yearMonth) {
  if (!supabase || !student_id) return { present: 0, absent: 0, working: 0 };
  const start = `${yearMonth}-01`;
  const end = `${yearMonth}-31`;
  const { data } = await supabase
    .from("attendance")
    .select("status")
    .gte("date", start)
    .lte("date", end);
  const present = data?.filter(d => d.status === "present").length || 0;
  const absent = data?.filter(d => d.status === "absent").length || 0;
  const working = data?.length || 0;
  return { present, absent, working };
}

export async function getFees(student_id) {
  if (!supabase || !student_id) return { due: [], paid: [] };
  const { data, error } = await supabase.from("fees").select("*").eq("student_id", student_id).order("due_date");
  if (error) return { due: [], paid: [] };
  return {
    due: data.filter(x => x.status !== "paid"),
    paid: data.filter(x => x.status === "paid")
  };
}

export async function getAnnouncements(className, section) {
  if (!supabase) return [];
  const { data } = await supabase.from("announcements").select("*").order("date", { ascending: false }).limit(20);
  return data || [];
}

export async function getDiary(className, section, forDate) {
  if (!supabase) return [];
  const q = supabase.from("diary").select("*").eq("class", className).eq("section", section);
  if (forDate) q.eq("date", forDate);
  const { data } = await q.order("date", { ascending: false }).limit(20);
  return data || [];
}
