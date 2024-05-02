"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export const addProduct = async (
  productId: number,
  productQuantity: number
) => {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    console.error("User is not authenticated");
    return;
  }

  try {
    let shoppingCartFoundId = 0;

    let { data: shopping_carts } = await supabase
      .from("shopping_carts")
      .select("*")
      .eq("user_id", user.id)
      .neq("completed", true)
      .single();
    shoppingCartFoundId = shopping_carts?.id;
    if (!shopping_carts) {
      let { data: shoppingCartCreated } = await supabase
        .from("shopping_carts")
        .insert([{ user_id: user?.id, completed: false }])
        .select("*")
        .single();
      shoppingCartFoundId = shoppingCartCreated.id;
    }

    const { data, error } = await supabase.from("cart_details").insert({
      user_id: user.id,
      product_id: productId,
      quantity: productQuantity,
      cart_id: shoppingCartFoundId,
    });

    if (error) {
      throw error;
    }
    revalidatePath("/cart");
    return data;
  } catch (error: any) {
    console.error("Error adding product to cart:", error.message);
    throw error;
  }
};
