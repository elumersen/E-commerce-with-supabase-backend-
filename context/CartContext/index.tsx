'use client';

import React, { createContext, useContext, useState } from 'react';
import { IProduct } from '@/models/productModel';
import { ICartItem } from '@/models/cartItemModel';
import { addProduct } from "@/app/lib/actions/add-product";
import { deleteProduct } from "@/app/lib/actions/delete-product";
import { updateCartItemQuantity } from "@/app/lib/actions/update-cart-quantity";
import { addCheckout } from "@/app/lib/actions/add-checkout";
import { redirect } from 'next/dist/server/api-utils';


interface CartContextType {
  cart: IProduct[];
  addToCart: (userId: string, product: IProduct, quantity: number) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, newQuantity: number) => void;
  createOrder: (cartId:number, cartTotal: number, shippingAddress: string, paymentMethod: string, name: string) => void;
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

  const updateQuantity = async (productId: number, newQuantity: number) => {

    try {
      await updateCartItemQuantity(productId, newQuantity);
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

  const createOrder = async ( cartId: number, cartTotal: number, shippingAddress: string, paymentMethod: string, name: string) => {
    try {
      await addCheckout( cartId, cartTotal, shippingAddress, paymentMethod, name);
    } catch (error: any) {
      console.error('Error creating order:', error.message);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, createOrder }}>
      {children}
    </CartContext.Provider>
  );
}