import Header from "@/components/Header";
import ProductsList from "@/components/Products/ProductsList";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Index() {
  const supabase = createClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();
  const currentUser = session?.user;

  let { data: shopping_carts } = await supabase
    .from('shopping_carts')
    .select('*').eq('user_id', currentUser?.id)
    

  if (shopping_carts?.length === 0) {
    await supabase
      .from('shopping_carts')
      .insert([
        { user_id: currentUser?.id }
      ])
      .select()
  }


  return session ? (
    
    <div className="relative h-auto w-full bg-gradient-to-l from-slate-200 to-slate-500">
      <ProductsList />
    </div>
  ) : (
    redirect("/login")
  );
}
