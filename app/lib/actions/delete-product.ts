"use server";
import { createClient } from '@/utils/supabase/server';

export const deleteProduct = async (productId: number) => {
	const supabase = createClient();
	try {
		const { error } = await supabase
			.from('cart_details')
			.delete()
			.eq('id', productId)

		if (error) {
			throw error;
		}
	} catch (error: any) {
		console.error('Error adding product to cart:', error.message);
		throw error;
	}
};

