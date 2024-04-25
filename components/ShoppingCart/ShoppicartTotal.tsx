import { ICartItem } from '@/models/cartItemModel';
import { useMemo } from 'react';

export type CartProps = {
  carts: ICartItem[];
};

const ShoppingCartTotal = ({ carts }: CartProps) => {
  const totalPrice = useMemo(() => {
    return carts.reduce((acc, cartItem) => {
      const productPrice = cartItem.product_id.price;
      const productQuantity = cartItem.quantity;
      return acc + (productPrice * productQuantity);
    }, 0);
  }, [carts]);

  return (
    <p>Total: ${totalPrice.toFixed(2)}</p>
  );
};

export default ShoppingCartTotal;
