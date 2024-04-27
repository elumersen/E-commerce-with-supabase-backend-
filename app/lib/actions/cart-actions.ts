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


export const fetchCurrentCart = async () => {
  const supabase = createClient();

  try {
    const { data: cart_details, error } = await supabase.from("cart_details").select(`
    quantity,
    cart_id (
     id,
     completed
    ),
    product_id (
      album,
      price
    )
  `);
    if (error) {
      throw error;
    }
    if (cart_details) {
      return cart_details;
    }
  } catch (error: any) {
    console.error("Error adding new cart:", error.message);
    throw error;
  }
};
