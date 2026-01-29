import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL || "";
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY ||
  process.env.SUPABASE_ANON_KEY ||
  "";

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("CRITICAL: Supabase credentials missing!");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Log connection check on startup (Server side)
if (typeof window === "undefined") {
  supabase
    .from("enrollments")
    .select("count")
    .limit(1)
    .then(({ error }) => {
      if (error)
        console.error("Supabase Connection Check Failed:", error.message);
      else console.log("Supabase Connection: OK");
    });
}
