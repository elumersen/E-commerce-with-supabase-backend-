"use client";

import React from "react";
import CheckoutForm from "./CheckoutForm";

const CheckoutSummary = () => {
  return (
    <div className="bg-[#ECF0F1] px-7 rounded-md flex flex-col w-full max-w-[25rem] py-10 mx-3">
      <p className="text-2xl font-semibold pb-10 text-gray-500 text-left">
        Checkout Summary
      </p>
      <CheckoutForm />
    </div>
  );
};

export default CheckoutSummary;
