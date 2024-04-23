// "use client";
// import React, { useEffect, useState } from "react";
// import { cartService } from "@/services/cartProducts";
// import { productsService } from "@/services/product";
// import { TProducts } from "@/types";
// import { faXmark } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useCart } from "@/context/CartContext";
// import ShoppingCartTable from "./ShoppingCartTable";

// interface ShoppingCartPanelProps {
//   onClose: () => void;
// }

// const ShoppingCartPanel = () => {
//   const { handleCart, isCartOpen, setIsCartOpen } = useCart();

//   return (
//     <>
//       {isCartOpen && (
//         <div className="fixed top-0 right-0 bottom-0 w-64 bg-white shadow-lg z-10 p-4">
//           <button
//             className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
//             onClick={() => setIsCartOpen(false)}
//           >
//             <FontAwesomeIcon icon={faXmark} />
//           </button>
//           <h2 className="text-lg font-semibold mb-4">Shopping cart</h2>
//           <ShoppingCartTable />
//         </div>
//       )}
//     </>
//   );
// };

// export default ShoppingCartPanel;
