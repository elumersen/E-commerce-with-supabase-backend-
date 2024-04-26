"use server";

import { createClient } from "@/utils/supabase/server";

export const fetchCartDetails = async () => {
  const supabase = createClient();
  try {
    const { data: shoppingCart, error } = await supabase
    .from("shopping_carts")
    .select("*")

    if (error) {
      throw error;
    }

    if (shoppingCart) {
      return shoppingCart;
    }
  } catch (error: any) {
    console.error("Error fetching cart details:", error.message);
    throw error;
  }
};

export const fetchProductCarts = async () => {
  const supabase = createClient();
  try {
    const { data: shoppingCart, error } = await supabase
    .from("cart_details")
    .select(`
    quantity,
      product_id (
       *
      )
    `);

    if (error) {
      throw error;
    }

    if (shoppingCart) {
      return shoppingCart;
    }
  } catch (error: any) {
    console.error("Error fetching cart details:", error.message);
    throw error;
  }
};
