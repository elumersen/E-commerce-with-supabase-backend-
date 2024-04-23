'use client';

import React, { Dispatch, SetStateAction, createContext, useContext, useState } from 'react';
import { addProduct } from "@/app/lib/actions/add-product";
import { IProduct } from '@/models/productModel';

interface CartContextType {
    cart: IProduct[];
    addToCart: (userId:string, product: IProduct, quantity: number) => void;
    handleCart: () => void;
    isCartOpen: boolean;
    setIsCartOpen: Dispatch<SetStateAction<boolean>>;

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
    const [isCartOpen, setIsCartOpen] = useState(false);
  
    const addToCart = async ( userId:string, product: IProduct, quantity: number) => {
      try {
        await addProduct(userId, product.id, quantity ); 
        setCart([...cart, product]);
      } catch (error: any) {
        console.error('Error adding product to cart:', error.message);
      }
    };

     function handleCart() {
        setIsCartOpen(!isCartOpen);
    }
  
    return (
      <CartContext.Provider value={{ cart, addToCart, handleCart, isCartOpen, setIsCartOpen }}>
        {children}
      </CartContext.Provider>
    );
  }