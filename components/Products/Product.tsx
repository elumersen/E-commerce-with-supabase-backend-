import Image from "next/image";
import { IProduct } from "@/models/productModel";
import ProductCartButton from "./ProductCartButton";

  export type ProductProps = {
    product: IProduct
  }

const Product = ({ product }: ProductProps) => {

  const { album, artist, price, thumbnail } = product;
 
  return (
    <div className="rounded-lg flex flex-col justify-center items-center relative overflow-hidden">
      <Image width={300} height={300} src={thumbnail} alt="product" />
      <div className="w-full h-full text-center absolute top-0 left-0 opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black/80 rounded-lg flex flex-col justify-center items-center">
        <p className="text-base text-gray-300 font-semibold">{album}</p>
        <h3 className="text-sm text-gray-400">{artist}</h3>
        <p className="text-sm text-gray-400">{price} $</p>
        <ProductCartButton productId={product.id}/>
      </div>
    </div>
  );
};

export default Product;
