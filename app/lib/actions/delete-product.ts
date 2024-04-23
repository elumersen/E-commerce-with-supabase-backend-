'use server';
import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';

export async function addProduct(formData: FormData) {
	const productId = formData.get('id');

	const supabase = createClient();
	const {
		data: { session },
	} = await supabase.auth.getSession();
	const user = session?.user;

	if (!user) {
		console.error('User is not authenticated');
		return;
	}

	const { error } = await supabase.from('cart_details').insert([
		{
			productId,
			user_id: user.id,
		},
	]);

	if (error) {
		if (error.code === '23505') throw new Error('Title already exist');
		throw new Error(error.message);
	}

	revalidatePath('/notes');
	// redirect('/notes');

	return { message: 'Success' };
}