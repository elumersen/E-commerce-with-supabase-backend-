"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer } from "react-toastify";
import Logout from "../Logout";
import Link from "next/link";

export default function Header() {
  return (
    <header className="p-1 w-full bg-white shadow-sm py-2">
      <ToastContainer autoClose={2500} position="top-right" />
      <div className="w-full container flex flex-row items-center justify-between mx-auto">
        <Link href="/">
          <Image width={100} height={100} src={"/logo.png"} alt="logo" />
        </Link>
        <div className="flex flex-row items-center"> 
          <Link 
            href="/cart"
            className="text-gray-700 px-4 hover:text-gray-900 focus:outline-none"
          >
            <FontAwesomeIcon icon={faCartShopping} />
          </Link>
          <Link 
            href="/records"
            className="text-gray-700 px-4 hover:text-gray-900 focus:outline-none"
          >
            <FontAwesomeIcon icon={faBagShopping} />
          </Link>
          <Logout />
        </div>
      </div>
    </header>
  );
}
