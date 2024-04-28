import { ICartItem } from "@/models/cartItemModel";
import { useEffect } from "react";
import { useCart } from "@/context/CartContext";

export type CartProps = {
  carts: ICartItem[];
};

const ShoppingCartTotal = ({ carts }: CartProps) => {
  const { shoppingTotal, setShoppingTotal } = useCart();

  useEffect(() => {
    const totalPrice = carts.reduce((acc, cartItem) => {
      const productPrice = cartItem.product_id.price;
      const productQuantity = cartItem.quantity;
      return acc + productPrice * productQuantity;
    }, 0);
    
    setShoppingTotal(totalPrice);
  }, [carts, setShoppingTotal]);

  return <p className="text-gray-500">Total: $ {shoppingTotal.toFixed(2)}</p>;
};

export default ShoppingCartTotal;
