import { TProducts } from "@/types/";
import { productsService } from "@/services/product";
import ProductGrid from "./ProductGrid";

const ProductsList = async () => {
  const products: TProducts = await productsService.getAllProducts();

  return (
      <div className="flex flex-col">
        <ProductGrid products={products} />
      </div>
  );
};

export default ProductsList;
