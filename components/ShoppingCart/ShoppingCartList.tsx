import { cartService } from "@/services/cartProducts";
import { TCartItem } from "@/types/";
import { ICartItem } from "@/models/cartItemModel";
import ShoppingCart from ".";

const ShoppingCartTList = async () => {
  const carts: TCartItem = await cartService.getCartProducts();

  return (
    <div className="bg-[#ECF0F1] px-7 rounded-md flex flex-col w-full max-w-[60rem] mx-auto justify-center py-10">
      <p className="text-2xl font-semibold pb-10 text-gray-500  text-left">Your Shopping Cart</p>
      {carts.map((cart: ICartItem) => (
        <ShoppingCart
          key={cart.id}
          cartId={cart.id}
          quantity={cart.quantity}
          cartProducts={cart.product_id}
        />
      ))}
     
    </div>
  );
};

export default ShoppingCartTList;
