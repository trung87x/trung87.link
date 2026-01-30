/**
 * Ensures a user profile exists in Supabase.
 * If not, creates one with default role.
 */
export async function ensureUserProfile(sessionUser) {
  if (!sessionUser || !sessionUser.email) return null;

  const { createAdminClient } = await import("@/utils/supabase/server");
  const supabase = createAdminClient();

  // 1. Check if profile exists
  let { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("email", sessionUser.email)
    .single();

  // 2. If missing, create it
  if (!profile) {
    const isAdminEmail = sessionUser.email === "job.dinhquangtrung@gmail.com";
    const newRole = isAdminEmail ? "admin" : "user";

    // Attempt to insert
    // Note: If 'id' is auto-gen, we just provide email/role
    const { data: newProfile, error } = await supabase
      .from("profiles")
      .insert([
        {
          email: sessionUser.email,
          role: newRole,
          full_name: sessionUser.name,
          avatar_url: sessionUser.image,
        },
      ])
      .select("role")
      .single();

    if (error) {
      console.error("Error creating profile:", error);
      // Fallback: return default role without DB record if insert failed
      // (Used for temporary robustness)
      return { role: newRole };
    }
    profile = newProfile;
  }

  return profile;
}
