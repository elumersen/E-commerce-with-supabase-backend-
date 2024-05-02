"use client";
import { useCart } from "@/context/CartContext";

import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from "react-toastify";

export type ProductCartButtonProps = {
  productId: number,
}

const ProductCartButton = ({ productId }: ProductCartButtonProps) => {
  const { addToCart } = useCart();
  
  const CustomIcon = () => (
    <span role="img" aria-label="rocket">
   🎵
    </span>
  );
  
  const handleAddToCart = async () => {
    try {
      addToCart( productId, 1);
      toast.success("Product added to cart", {
        icon: CustomIcon
      });
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <p className="text-xs text-gray-200 mt-2" onClick={() => handleAddToCart()}>
      <FontAwesomeIcon
        className="text-base text-gray-200"
        icon={faCartShopping}
      />
    </p>
  )
}

export default ProductCartButton

