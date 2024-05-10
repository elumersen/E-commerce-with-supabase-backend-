"use server";

import { createClient } from "@/utils/supabase/server";

export const fetchProducts = async () => {
    const supabase = createClient();
    try {
      const { data: products, error } = await supabase
        .from("products")
        .select("*");
  
      if (error) {
        throw error;
      }
  
      if (products) {
        return products;
      }
    } catch (error: any) {
      console.error("Error fetching cart details:", error.message);
      throw error;
    }
  };
  