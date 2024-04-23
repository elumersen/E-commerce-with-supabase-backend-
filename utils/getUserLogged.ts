"use server";

import { createClient } from "./supabase/server";

export async function getUserLogged() {
  const supabase = createClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();
  
  return session?.user;
}
