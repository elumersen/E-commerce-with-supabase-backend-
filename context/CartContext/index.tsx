"use client";

import React, { createContext, useContext, useState } from "react";
import { IProduct } from "@/models/productModel";
import { ICartItem } from "@/models/cartItemModel";
import { addProduct } from "@/app/lib/actions/add-product";
import { deleteProduct } from "@/app/lib/actions/delete-product";
import { updateCartItemQuantity } from "@/app/lib/actions/update-cart-quantity";
import { addCheckout } from "@/app/lib/actions/add-checkout";

interface CartContextType {
  cart: IProduct[];
  addToCart: ( productId: number, quantity: number) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, newQuantity: number) => void;
  createOrder: (
    cartTotal: number,
    shippingAddress: string,
    paymentMethod: string,
    name: string
  ) => void;
  shoppingTotal: number;
  setShoppingTotal: (total: number) => void;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<IProduct[]>([]);
  const [cartDetails, setCartDetails] = useState<ICartItem[]>([]);
  const [shoppingTotal, setShoppingTotal] = useState<number>(0);

  const addToCart = async (
    productId: number,
    quantity: number
  ) => {
    try {
      await addProduct(productId, quantity);
    } catch (error: any) {
      console.error("Error adding product to cart:", error.message);
    }
  };

  const removeFromCart = async (productId: number) => {
    try {
      await deleteProduct(productId);

      const updatedCart = cart.filter((product) => product.id !== productId);
      setCart(updatedCart);
    } catch (error: any) {
      console.error("Error removing product from cart:", error.message);
    }
  };

  const updateQuantity = async (productId: number, newQuantity: number) => {
    try {
      await updateCartItemQuantity(productId, newQuantity);
      const updatedCart = cartDetails.map((cart) => {
        if (cart.id === productId) {
          return { ...cart, quantity: newQuantity };
        }
        return cart;
      });
      setCartDetails(updatedCart);
    } catch (error: any) {
      console.error("Error removing product from cart:", error.message);
    }
  };

  const createOrder = async (
    cartTotal: number,
    shippingAddress: string,
    paymentMethod: string,
    name: string
  ) => {
    try {
      await addCheckout(cartTotal, shippingAddress, paymentMethod, name);
    } catch (error: any) {
      console.error("Error creating order:", error.message);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        shoppingTotal,
        setShoppingTotal,
        addToCart,
        removeFromCart,
        updateQuantity,
        createOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
