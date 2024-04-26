"use client";

import React from "react";
import CheckoutForm from "./CheckoutForm";
import OrderSummary from "./OrderSummary";

const CheckoutSummary = () => {
  return (
    <div className="bg-[#ECF0F1] px-7 rounded-md flex flex-col w-full max-w-[50%] py-10 mx-3">
      <p className="text-2xl font-semibold pb-10 text-gray-500 text-left">
        Complete Payment
      </p>
      <div className="flex flex-row gap-10">
        <CheckoutForm />
        <OrderSummary />
      </div>
    </div>
  );
};

export default CheckoutSummary;
