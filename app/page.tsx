import ProductsList from "@/components/Products/ProductsList";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Index() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  const currentUser = user;

  let { data: shopping_carts } = await supabase
  .from('shopping_carts')
  .select('*').eq('user_id', currentUser?.id)
  .neq('completed', true)

  if (shopping_carts?.length === 0) {
    await supabase
      .from('shopping_carts')
      .insert([
        { user_id: currentUser?.id,
          completed: false
         }
      ])
      .select()
  }


  return user ? (
    
    <div className="relative h-auto w-full bg-gradient-to-l from-slate-200 to-slate-500">
      <ProductsList />
    </div>
  ) : (
    redirect("/login")
  );
}
