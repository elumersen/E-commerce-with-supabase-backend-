import Header from '@/components/Header';
import ProductsGrid from '@/components/Products';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export default async function Index() {
	const supabase = createClient();

	const {
		data: { session },
	} = await supabase.auth.getSession();

	return session ? (
		<div className="relative p-4 h-auto w-full bg-gradient-to-l from-slate-200 to-slate-500">
      <Header />
			<ProductsGrid />
      abc
			</div>
	) : (
		redirect('/login')
	);
}