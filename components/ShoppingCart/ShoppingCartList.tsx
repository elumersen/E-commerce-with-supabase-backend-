import { cartService } from "@/services/cartProducts";
import { TCartItem } from "@/types/";
import ShoppingCartGrid from "./ShoppingCartGrid";

const ShoppingCartTList = async () => {
  const carts: TCartItem = await cartService.getCartProducts();

  if (carts.length === 0) {
    return (
      <div className="flex flex-row justify-center">
        <p className="text-2xl font-semibold text-gray-500">
          Your shopping cart is empty :(
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-row">
      <div className="bg-[#ECF0F1] px-7 rounded-md flex flex-col w-full max-w-[60rem] mx-auto justify-center py-10">
        <p className="text-2xl font-semibold pb-10 text-gray-500  text-left">
          Your Shopping Cart
        </p>
        <ShoppingCartGrid carts={carts} />    
      </div>
    </div>
  );
};

export default ShoppingCartTList;
