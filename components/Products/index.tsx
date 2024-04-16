import { IProduct } from "@/models/productModel";
import { TProducts } from "@/types/";
import { productsService } from "@/services/product";
import Image from "next/image";

const ProductsGrid = async () => {
  const renderProducts = async () => {
    try {
      const products: TProducts = await productsService.getAllProducts();
      return products.map((product: IProduct) => {
        return (
          <article key={product.id} className="rounded-lg p-5 flex flex-col justify-center items-center shadow-md  backdrop-blur-2xl">
            <Image
              width={300}
              height={300}
              src={product.thumbnail}
              alt="product"
            />
            <div className="bg-white">
            <h3>
              {product.album}
            </h3>
            <p>{product.artist} -  {product.price}</p>
            </div>
          </article>
        );
      });
    } catch (error: any) {
      console.log("whateer");
    }
  };

  return (
    <div className="grid grid-rows-6 grid-flow-col gap-4">
      {await renderProducts()}
    </div>
  );
};

export default ProductsGrid;
