"use client"
import { useCart } from "@/context/CartContext";
import { toast } from "react-toastify";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ShoppingCartRemoveButtonProps {
    cartId: number;
}

const ShoppingCartRemoveButton = ({ cartId }: ShoppingCartRemoveButtonProps) => {
    const { removeFromCart } = useCart();

    const handleRemoveClick = async () => {
        try {
            await removeFromCart(cartId);
            toast.success("Product removed from cart");
        } catch (error: any) {
            console.log(error);
            toast.error(error.message);
        }
    };
    
    return (
        <div className="px-5 cursor-pointer transform hover:scale-110 transition-transform" onClick={handleRemoveClick}>
            <FontAwesomeIcon className="text-gray-500" icon={faXmark} />
        </div>
    );
};

export default ShoppingCartRemoveButton;
