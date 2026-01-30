const { createClient } = require("@supabase/supabase-js");
const dotenv = require("dotenv");
const path = require("path");

// Load env vars
// We attempt to load from .env.local relative to the project root
// Playwright usually runs from project root
dotenv.config({ path: ".env.local" });
dotenv.config(); // Fallback to .env

function getSupabaseAdmin() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    console.warn(
      "⚠️  Missing Supabase Credentials in Env. Some tests may skip or fail.",
    );
    return null;
  }

  return createClient(supabaseUrl, serviceRoleKey);
}

module.exports = { getSupabaseAdmin };
