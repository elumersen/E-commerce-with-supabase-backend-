"use client";

import React from "react";
import CheckoutForm from "./CheckoutForm";
import OrderSummary from "./OrderSummary";
import Link from "next/link";

const CheckoutSummary = () => {
  return (
    <div className="bg-[#ECF0F1] h-auto px-7 rounded-md flex flex-col w-full max-w-[50%] py-10 mx-3">
      <p className="text-2xl font-semibold pb-10 text-gray-500 text-left">
        Complete Payment
      </p>
      <div className="flex flex-row gap-10">
        <CheckoutForm />
        <OrderSummary />
      </div>
      <Link
        href="/"
        className="text-gray-700 text-base hover:text-gray-900 focus:outline-none"
      >
        Back to shop
      </Link>
    </div>
  );
};


export default CheckoutSummary;
