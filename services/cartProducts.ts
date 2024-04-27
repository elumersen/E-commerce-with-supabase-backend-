import { TCartItem } from "@/types";
import { createClient } from "@/utils/supabase/server";

const supabase = createClient();

class CartProducts {
  async getCartProducts(): Promise<TCartItem> {

    const {
      data: { user },
    } = await supabase.auth.getUser();
    const currentUser = user;

    try {
      let { data: shopping_carts } = await supabase
      .from('shopping_carts')
      .select('*').eq('user_id', currentUser?.id)
      .neq('completed', true)
      .single()

      console.log('shopping_carts', currentUser?.id)

      if(!shopping_carts) return [];
    
      const { data: cart_details, error } = await supabase.from("cart_details")
        .select(`
      id,
      quantity,
        product_id (
         *
        )
      `)
      .eq('cart_id', shopping_carts?.id);

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
