import { ICartProductsDetails } from "@/models/cartProductsDetails";
import { createClient } from "@/utils/supabase/server";

const supabase = createClient();

class CartProducts {
  //   async getAllProducts(): Promise<ICartProductsDetails> {
  async getCartProducts() {
    try {
      let { data: cart_details, error } = await supabase.from("cart_details")
        .select(`*,
    products (
        products_id
    )
  `);

      if (error) {
        throw new Error("couldn't read albums");
      }
      
      if (!cart_details) {
        throw new Error("couldn't read cart details");
      }
      console.log("cart_details", cart_details);
      //   return cart_details;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}

export const cartService = new CartProducts();
