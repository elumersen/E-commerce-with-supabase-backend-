"use server";

import { createClient } from "@/utils/supabase/server";

export const addNewCart = async (userId: string) => {
  const supabase = createClient();

  try {
    const { data, error } = await supabase
      .from("shopping_carts")
      .insert([{ user_id: userId }])
      .select();
    if (error) {
      throw error;
    }
  } catch (error: any) {
    console.error("Error adding new cart:", error.message);
    throw error;
  }
};
