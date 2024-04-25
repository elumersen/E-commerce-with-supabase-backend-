import React from "react";
import { IProduct } from "@/models/productModel";
import Image from "next/image";
import ShoppingCartRemoveButton from "./ShoppincartRemoveButton";
import ShoppingCartQuantityButtons from "./ShoppingCartQuantityButtons";

export type CartProps = {
  cartProducts: IProduct;
  quantity: number;
  cartId: number;
};
const ShoppingCart = ({ cartProducts, quantity, cartId }: CartProps) => {
  const { album, artist, year, price, thumbnail, genre } = cartProducts;

  return (
    <div className="flex flex-row w-full items-center">
      <div className="grid grid-cols-5 gap-2 w-full bg-[#E5E9EA] rounded-md p-4 mb-3">
        <div className="rounded-md">
          <Image width={120} height={120} src={thumbnail} alt="product" />
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex flex-col justify-center">
            <p className="text-gray-400 text-sm">
              {album} - {year}
            </p>
            <p className="text-gray-300 text-xs">{artist}</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <p className="text-gray-400 text-sm">{genre}</p>
        </div>
        <ShoppingCartQuantityButtons cartId={cartId} initialQuantity={quantity} />
        <div className="flex items-center space-x-4">
          <p className="text-gray-400 text-sm">{price} $</p>
        </div>
      </div>
      <ShoppingCartRemoveButton cartId={cartId} />
    </div>
  );
};

export default ShoppingCart;
