"use client";

import React, { useState } from "react";
import { useCart } from "@/context/CartContext";

const CheckoutSummary = () => {
  const { createOrder } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    createOrder(1, 200, address, paymentMethod);
  };

  return (
    <div className="bg-[#ECF0F1] px-7 rounded-md flex flex-col w-full max-w-[25rem] py-10 mx-3">
      <p className="text-2xl font-semibold pb-10 text-gray-500 text-left">
        Checkout Summary
      </p>
      <form onSubmit={handleSubmit} className="">
        <div className="mb-5 flex flex-col">
          <label className="mr-3 mb-3 text-sm text-gray-500" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-none bg-gray-200 rounded-md p-2 w-full focus:outline-none"
          />
        </div>
        <div className="mb-5 flex flex-col">
          <label className="mr-3 mb-3 text-sm text-gray-500" htmlFor="address">
            Address:
          </label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="border-none bg-gray-200 rounded-md p-2 w-full focus:outline-none"
          />
        </div>
        <div className="mb-5">
          <label
            className="mb-3 mr-3 text-sm text-gray-500"
            htmlFor="paymentMethod"
          >
            Payment Method:
          </label>
          <select
            id="paymentMethod"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="border-none bg-gray-200 rounded-md p-2 text-gray-500 hover:text-gray-700 focus:outline-none w-full"
          >
            <option className="text-sm" value="">
              Select Payment Method
            </option>
            <option className="text-sm" value="credit_card">
              Credit Card
            </option>
            <option className="text-sm" value="paypal">
              PayPal
            </option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-gray-400 p-2 rounded-sm text-gray-200 text-sm hover:scale-105 transition-transform w-full"
        >
          Submit Order
        </button>
      </form>
    </div>
  );
};

export default CheckoutSummary;
