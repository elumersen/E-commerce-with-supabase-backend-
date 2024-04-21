import Header from '@/components/Header';
import ProductsList from '@/components/Products/ProductsList';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export default async function Index() {
	const supabase = createClient();

	const {
		data: { session },
	} = await supabase.auth.getSession();

	return session ? (
		<div className="relative h-auto w-full bg-gradient-to-l from-slate-200 to-slate-500">
			<Header />
			<ProductsList />
			abc
		</div>
	) : (
		redirect('/login')
	);
}