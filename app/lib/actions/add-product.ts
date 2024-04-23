"use server";

import { ICart } from '@/models/cart';
import { createClient } from '@/utils/supabase/server';

export const addProduct = async (userId: string, productId: number, productQuantity: number) => {
    const supabase = createClient();
    
    const {
		data: { session },
	} = await supabase.auth.getSession();
	const user = session?.user;

	if (!user) {
		console.error('User is not authenticated');
		return;
	}

    
  let { data: shopping_carts } = await supabase
  .from('shopping_carts')
  .select('*').eq('user_id', user.id)

  const activeCart:ICart = shopping_carts!.find((cart) => cart.status === true);

    try {
        const { data, error } = await supabase
            .from('cart_details')
            .insert({ user_id: user.id, product_id: productId, quantity: productQuantity, cart_id: activeCart.id });

        if (error) {
            throw error;
        }

        return data;
    } catch (error: any) {
        console.error('Error adding product to cart:', error.message);
        throw error;
    }
};

