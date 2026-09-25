// Reconstructed: the original src/integrations/supabase/client.ts was missing from the
// flat download, but ./auth-attacher.ts imports `supabase` from it.
import { createClient } from "@supabase/supabase-js";
import type { Database } from "./types";

const SUPABASE_URL = import.meta.env["VITE_SUPABASE_URL"] as string;
const SUPABASE_PUBLISHABLE_KEY = import.meta.env["VITE_SUPABASE_PUBLISHABLE_KEY"] as string;

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    // `localStorage` does not exist during SSR — fall back to in-memory only.
    storage: typeof window === "undefined" ? undefined : window.localStorage,
    persistSession: typeof window !== "undefined",
    autoRefreshToken: typeof window !== "undefined",
  },
});
