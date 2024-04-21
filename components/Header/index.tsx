"use client";

import React, { useState } from "react";
import Image from "next/image";
import ShoppingCartPanel from "../ShoppingCart";
import User from "../User";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Logout from "../Logout";

export default function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const handleCartClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <header className="p-1 w-full bg-white shadow-sm py-2">
      <div className="w-full container flex flex-row items-center justify-between mx-auto">
        <Image width={100} height={100} src={"/logo.png"} alt="logo" />
        <div className="flex flex-row">
          <button
            className="text-gray-700 hover:text-gray-900 focus:outline-none"
            onClick={handleCartClick}
          >
            <FontAwesomeIcon icon={faCartShopping} />
          </button>
          <Logout />
        </div>
        {isCartOpen && (
          <ShoppingCartPanel onClose={() => setIsCartOpen(false)} />
        )}
      </div>
    </header>
  );
}
