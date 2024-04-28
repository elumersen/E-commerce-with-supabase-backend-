"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { fetchCurrentCart } from "@/app/lib/actions/cart-actions";
import { useCart } from "@/context/CartContext";

export interface orderProducts {
  cartProducts: {
    album: string;
    price: number;
  };
  quantity: number;
}
const OrderSummary = () => {
  const { shoppingTotal } = useCart();
  const [cartDetailsData, setCartDetailsData] = useState<any[]>([]);

  const getIncompleted = async () => {
    try {
      const data: any[] | undefined = await fetchCurrentCart();
      if (!data) {
        throw new Error("Error reading details");
      }
      const incompleteCartDetails = data.filter(
        (item) => !item.cart_id.completed
      );
      setCartDetailsData(incompleteCartDetails);
    } catch (error: any) {
      console.error("Error:", error.message);
    }
  };

  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${day}-${month}-${year}`;

  useEffect(() => {
    getIncompleted();
  }, []);

  const renderCartDetails = () => {
    if (!cartDetailsData) return;
    return cartDetailsData?.map((item: any, index: number) => (
      <div
        key={index}
        className="text-left px-3 text-xs flex flex-row w-full justify-between"
      >
        <p>{item.product_id.album}</p>
        <p>{item.product_id.price.toFixed(2)}</p>
        <p>x {item.quantity}</p>
      </div>
    ));
  };

  return (
    <div className="bg-white shadow-md py-5  font-mono flex flex-col text-center w-full xl:max-w-[430px] 2xl:max-w-[300px]">
      <h3 className="uppercase pb-5">------- Order summary -------</h3>
      <Image
        className="pb-10 mx-auto"
        width={100}
        height={100}
        src={"/cart.png"}
        alt="logo"
      />
      <div className="flex text-xs flex-col items-start px-3 pb-3">
        <p>Order ID:</p>
        <p>Date: {currentDate}</p>
      </div>
      <span className="pb-3 block">------------------------------</span>
      <div>
        <div className="flex text-xs font-bold flex-row w-full justify-between px-3">
          <p>Album</p>
          <p>Price</p>
          <p>Quantity</p>
        </div>
        {renderCartDetails()}
      </div>
      <span className="pb-3 block">------------------------------</span>
      <div></div>
      <div className="text-left text-xs px-3">
        <p>Total: $ {shoppingTotal.toFixed(2)}</p>
      </div>
      <span className="pb-3 block">------------------------------</span>
      <p className="text-bold text-xs">THANK YOU FOR SHOPPING!</p>
    </div>
  );
};

export default OrderSummary;
