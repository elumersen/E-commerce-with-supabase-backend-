"use server";
import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';

export const deleteProduct = async (cartId: number) => {
	const supabase = createClient();
	try {
		const { error } = await supabase
			.from('cart_details')
			.delete()
			.eq('id', cartId)

		if (error) {
			throw error;
		}
		revalidatePath("/cart");
		
	} catch (error: any) {
		console.error('Error removing product from cart:', error.message);
		throw error;
	}
};

