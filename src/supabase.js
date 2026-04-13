import { createClient } from '@supabase/supabase-js';

// Access environment variables using import.meta.env for Vite
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL; 
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.warn("⚠️  Supabase credentials missing or placeholder. Check your .env file.");
  console.warn("  VITE_SUPABASE_URL:", supabaseUrl);
  console.warn("  VITE_SUPABASE_ANON_KEY:", supabaseKey ? "(set)" : "(missing)");
}

export const supabase = createClient(supabaseUrl, supabaseKey);