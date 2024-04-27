"use server";

import { createClient } from "@/utils/supabase/server";

export const addCheckout = async (
  cartTotal: number,
  shippingAddress: string,
  paymentMethod: string,
  checkoutName: string
) => {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  const currentUser = user;



  try {
    let { data: shopping_cart_found } = await supabase
    .from('shopping_carts')
    .select('*').eq('user_id', currentUser?.id)
    .neq('completed', true)
    .single()

    if(!shopping_cart_found) throw new Error("shopping cart not found")

    const { data: orders, error } = await supabase
      .from("orders")
      .insert([
        {
          cartId: shopping_cart_found.id,
          total: cartTotal,
          shipping_address: shippingAddress,
          payment_method: paymentMethod,
          name: checkoutName,
        },
      ])
      .select();

    const { data: shopping_carts, error: shopping_carts_error } = await supabase
      .from("shopping_carts")
      .update({ completed: true })
      .eq('id', shopping_cart_found.id)
      .select();

    if (error) {
      throw error;
    }
  } catch (error: any) {
    console.error("Error creating order:", error.message);
    throw error;
  }
};
