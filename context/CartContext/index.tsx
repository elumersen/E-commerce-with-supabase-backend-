'use client';

import React, { createContext, useContext, useState } from 'react';
import { addProduct } from "@/app/lib/actions/add-product";
import { deleteProduct } from "@/app/lib/actions/delete-product";
import { updateCartItemQuantity } from "@/app/lib/actions/update-cart-quantity";
import { IProduct } from '@/models/productModel';
import { ICartItem } from '@/models/cartItemModel';

interface CartContextType {
  cart: IProduct[];
  addToCart: (userId: string, product: IProduct, quantity: number) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, newQuantity: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<IProduct[]>([]);
  const [cartDetails, setCartDetails] = useState<ICartItem[]>([]);

  const addToCart = async (userId: string, product: IProduct, quantity: number) => {
    try {
      await addProduct(userId, product.id, quantity);
      setCart([...cart, product]);
    } catch (error: any) {
      console.error('Error adding product to cart:', error.message);
    }
  };

  const removeFromCart = async (productId: number) => {
    try {

      await deleteProduct(productId);

      const updatedCart = cart.filter(product => product.id !== productId);
      setCart(updatedCart);
    } catch (error: any) {
      console.error('Error removing product from cart:', error.message);
    }
  };

  const updateQuantity = async (newQuantity: number, productId: number) => {

    try {
      await updateCartItemQuantity(newQuantity, productId);
      const updatedCart = cartDetails.map(cart => {
        if (cart.id === productId) {
          return { ...cart, quantity: newQuantity };
        }
        setCartDetails(updatedCart);
        return cart;
      });
    } catch (error: any) {
      console.error('Error removing product from cart:', error.message);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
}