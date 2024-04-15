import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export default async function Index() {
	const supabase = createClient();

	const {
		data: { session },
	} = await supabase.auth.getSession();

	return session ? (
		<div className='relative p-4 rounded-md h-auto'>
				abc
			</div>
	) : (
		redirect('/login')
	);
}