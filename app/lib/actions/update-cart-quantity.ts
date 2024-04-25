"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export const updateCartItemQuantity = async (cartId: number, newQuantity: number) => {
    const supabase = createClient();


    try {
      const { data, error } = await supabase
        .from('cart_details')
        .update({ quantity: newQuantity })
        .match({id: cartId});
  
      if (error) {
        throw new Error(error.message);
      }
  revalidatePath('/cart')
      return data;
    } catch (error: any) {
      throw new Error('Error updating cart item quantity:', error.message);
    }
  };