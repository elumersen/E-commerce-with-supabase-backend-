"use client";

import { useState } from "react";
import { TProducts } from "@/types/";
import { IProduct } from "@/models/productModel";
import Dropdown, { Option } from "react-dropdown";
import "react-dropdown/style.css";
import Product from "./Product";

const ProductGrid = ({ products }: { products: TProducts }) => {
  const [dropdownOption, setDropdownOption] = useState<string | null>(null);

  const filterProducts = (
    option: string | null,
    products: IProduct[]
  ): IProduct[] => {
    if (option === "products" || !option) return products;
    return products.filter((product: IProduct) => product.genre === option);
  };

  const filteredProducts = filterProducts(dropdownOption, products);

  const options: Option[] = [
    { value: "products", label: "All Products" },
    { value: "Rock", label: "Rock" },
    { value: "R&B", label: "R&B" },
    { value: "Pop", label: "Pop" },
    { value: "Reggae", label: "Reggae" },
    { value: "Jazz", label: "Jazz" },
    { value: "Hip Hop", label: "Hip Hop" },
    { value: "Grunge", label: "Grunge" },
    { value: "Reggaeton", label: "Reggaeton" },
    { value: "Indie Rock", label: "Indie Rock" },
  ];

  const handleSelect = (option: Option) => {
    setDropdownOption(option.value);
  };
  return (
    <>
      <Dropdown
        options={options}
        onChange={handleSelect}
        value={dropdownOption || undefined}
        placeholder="Select an option"
      />
      <div className="grid grid-rows-6 grid-flow-col gap-4 w-full max-w-[70rem] mx-auto pt-6">
        {filteredProducts.map((product: IProduct) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductGrid;
