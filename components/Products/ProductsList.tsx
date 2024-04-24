import React from 'react';
import { IProduct } from '@/models/productModel';
import { TProducts } from '@/types/';
import { productsService } from '@/services/product';
import Product from './Product';

const ProductsList = async () => {
  const products: TProducts = await productsService.getAllProducts();

  return (
    <div className="grid grid-rows-6 grid-flow-col gap-4 w-full max-w-[70rem] mx-auto pt-6">
      {products.map((product: IProduct) => (
        <Product
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
};

export default ProductsList;
