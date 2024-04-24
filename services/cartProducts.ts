import { TCartItem } from "@/types";
import { createClient } from "@/utils/supabase/server";

const supabase = createClient();

class CartProducts {
  async getCartProducts(): Promise<TCartItem> {
    try {
      const { data: cart_details, error } = await supabase.from("cart_details")
        .select(`
      id,
      quantity,
        product_id (
         *
        )
      `);
      if (error) {
        throw new Error("couldn't read albums");
      }
      return cart_details as unknown as TCartItem;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}

export const cartService = new CartProducts();
