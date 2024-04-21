import React from "react";
import Image from "next/image";
import { IProduct } from "@/models/productModel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Product = ({ artist, album, price, thumbnail }: IProduct) => {
  return (
    <div
      className="rounded-lg flex flex-col justify-center items-center relative overflow-hidden"
    >
      <Image width={300} height={300} src={thumbnail} alt="product" />
      <div className="w-full h-full text-center absolute top-0 left-0 opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black/80 rounded-lg flex flex-col justify-center items-center">
        <p className="text-base text-gray-300 font-semibold">{album}</p>
        <h3 className="text-sm text-gray-400">{artist}</h3>
        <p className="text-sm text-gray-400">{price} $</p>
        <p className="text-xs text-gray-200 mt-2">
          <FontAwesomeIcon
            className="text-base text-gray-200"
            icon={faCartShopping}
          />
        </p>
      </div>
    </div>
  );
};

export default Product;
