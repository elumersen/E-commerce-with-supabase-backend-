import React from "react";
import { IProduct } from "@/models/productModel";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import ShoppingCartRemoveButton from "./ShoppincartRemoveButton";

export type CartProps = {
  cartProducts: IProduct;
  quantity: number;
};
const ShoppingCart = ({ cartProducts, quantity }: CartProps) => {
  const { album, artist, year, price, thumbnail, genre } = cartProducts;

  // const { quantity } = cartProducts;
  // const { album } = product_id;
  // console.log('album', album)

  return (
    <div className="flex flex-row w-full max-w-[780px] items-center">
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
        <div className="flex flex-row items-center w-7 justify-between">
          <p className="text-gray-400 text-sm">{quantity}</p>
          <div className="flex flex-col pl-5">
            <FontAwesomeIcon
              icon={faPlus}
              className="rounded-full bg-gray-400 p-1 text-xs h-5 w-3 mb-2"
            />
            <FontAwesomeIcon
              icon={faMinus}
              className="rounded-full bg-gray-400 p-1 text-xs h-5 w-3"
            />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <p className="text-gray-400 text-sm">{price} $</p>
        </div>
      </div>
      <ShoppingCartRemoveButton />
    </div>
  );
};

export default ShoppingCart;
