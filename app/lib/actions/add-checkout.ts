"use server";

import { createClient } from "@/utils/supabase/server";

export const addCheckout = async (
  cartId: number,
  cartTotal: number,
  shippingAddress: string,
  paymentMethod: string
) => {
  const supabase = createClient();

  try {
    const { data: orders, error } = await supabase
      .from("orders")
      .insert([
        {
          cart_id: cartId,
          total: cartTotal,
          shipping_address: shippingAddress,
          payment_method: paymentMethod,
        },
      ])
      .select();
    if (error) {
      throw error;
    }
  } catch (error: any) {
    console.error("Error creating order:", error.message);
    throw error;
  }
};
