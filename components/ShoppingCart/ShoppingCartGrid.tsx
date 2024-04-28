"use client";

import { TCartItem } from "@/types/";
import ShoppingCart from ".";
import { ICartItem } from "@/models/cartItemModel";
import Link from "next/link";
import ShoppingCartTotal from "./ShoppicartTotal";

const ShoppingCartGrid = ({ carts }: { carts: TCartItem }) => {
  return (
    <>
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
    </>
  );
};

export default ShoppingCartGrid;
