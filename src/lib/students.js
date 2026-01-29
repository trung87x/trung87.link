import { supabase } from "./supabase";

/**
 * Checks if a user is authorized for a specific course by querying Supabase.
 * @param {string} email - The user's email address.
 * @param {string} courseSlug - The unique ID of the course (e.g., "react.school")
 * @returns {Promise<boolean>}
 */
export async function isStudent(email, courseSlug) {
  if (!email || !courseSlug) return false;

  if (!process.env.SUPABASE_URL) {
    console.error("CRITICAL: SUPABASE_URL is missing");
    return false;
  }

  const { data, error } = await supabase
    .from("enrollments")
    .select("id")
    .eq("user_email", email.toLowerCase())
    .eq("course_id", courseSlug)
    .single();

  if (error && error.code !== "PGRST116") {
    console.error("Supabase Error:", error.message, "Code:", error.code);
    if (error.code === "42P01") {
      console.warn(
        "HINT: The 'enrollments' table might not exist yet. Please run the SQL setup.",
      );
    }
    return false;
  }

  return !!data;
}
