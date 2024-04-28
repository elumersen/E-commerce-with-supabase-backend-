"use server";

import { createClient } from "@/utils/supabase/server";

export const fetchCartDetails = async () => {
  const supabase = createClient();
  try {
    const { data: shoppingCart, error } = await supabase
      .from("shopping_carts")
      .select("*");

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
    const { data: shoppingCart, error } = await supabase.from("cart_details")
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

  const {
    data: { user },
  } = await supabase.auth.getUser();
  const currentUser = user;

  try {
    const { data: cart_details, error } = await supabase
      .from("cart_details")
      .select(
        `
    quantity,
    user_id,
    cart_id (
     id,
     completed
    ),
    product_id (
      album,
      price
    )
  `
      )
      .eq("user_id", currentUser?.id);
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

export const fetchShoppingHistory = async () => {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  const currentUser = user;

  try {
    const { data: orders, error } = await supabase
      .from("orders")
      .select(
        `
      id,
      order_date,
      total,
      cart_id (
      id,
      completed
      )

    `
      )
      .eq("user_id", currentUser?.id);
    if (error) {
      throw error;
    }
    if (orders) {
      return orders;
    }
  } catch (error: any) {
    console.error("Error removing product from cart:", error.message);
    throw error;
  }
};
