import Link from "next/link";
import { cartService } from "@/services/cartProducts";
import { TCartItem } from "@/types/";
import { ICartItem } from "@/models/cartItemModel";
import ShoppingCart from ".";
import ShoppingCartTotal from "./ShoppicartTotal";

const ShoppingCartTList = async () => {
  const carts: TCartItem = await cartService.getCartProducts();

  // Verifica si no hay productos en el carrito
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
        {carts.map((cart: ICartItem) => (
          <ShoppingCart
            key={cart.id}
            cartId={cart.id}
            quantity={cart.quantity}
            cartProducts={cart.product_id}
          />
        ))}
        <div>
          <div className="flex flex-row justify-between w-full max-w-[840px]">
            <Link
              href="/"
              className="text-gray-700 text-base hover:text-gray-900 focus:outline-none"
            >
              Back to shop
            </Link>
            <div className="flex flex-col">
              <ShoppingCartTotal carts={carts} />
              <Link
                href="/checkout"
                className="text-gray-700 text-base hover:text-gray-900 focus:outline-none"
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartTList;
