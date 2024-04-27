"use server";

import { createClient } from "./supabase/server";

export async function getUserLogged() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  
  return user;
}
