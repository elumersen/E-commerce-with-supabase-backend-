"use client";

import { useState } from "react";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCart } from "@/context/CartContext";

export type QuantityButtonsProps = {
    initialQuantity: number;
    cartId: number;
};

const ShoppingCartQuantityButtons = ({
    initialQuantity,
    cartId,
}: QuantityButtonsProps) => {
    
    const { updateQuantity } = useCart();
    const [quantity, setQuantity] = useState(initialQuantity);


    const increaseCount = async () => {
        setQuantity(quantity + 1);
        await updateQuantity(quantity,  cartId);
    };

    const decreaseCount = async () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
            await updateQuantity(quantity - 1, cartId);
        }
    };



    return (
        <div className="flex flex-row items-center w-7 justify-between">
            <p className="text-gray-400 text-sm">{quantity}</p>
            <div className="flex flex-col pl-5">
                <div className="flex flex-col pl-5">
                    <span onClick={increaseCount}>
                    <FontAwesomeIcon
                        icon={faPlus}
                        className="rounded-full bg-gray-400 p-1 text-xs h-5 w-3 mb-2 cursor-pointer"
                        
                    />
                    </span>
                    <span onClick={decreaseCount}>
                    <FontAwesomeIcon
                        icon={faMinus}
                        className="rounded-full bg-gray-400 p-1 text-xs h-5 w-3 cursor-pointer"
                    />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCartQuantityButtons;
