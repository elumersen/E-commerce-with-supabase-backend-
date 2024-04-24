"use client";
import { useCart } from "@/context/CartContext";
import { IProduct } from "@/models/productModel";
import { getUserLogged } from "@/utils/getUserLogged";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export type ProductCartButtonProps = {
  product: IProduct,
}

const ProductCartButton = ({ product }: ProductCartButtonProps) => {
  const { addToCart } = useCart();

  const [userId, setUserId] = useState<string>("");

  useEffect(() => {
    const getUserId = async () => {
      const data = await getUserLogged()
      setUserId(data?.id as string)
    }

    getUserId()
  }, [])

  const handleAddToCart = async () => {
    try {
      addToCart(userId, product, 1);
      toast.success("Product added to cart");
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

