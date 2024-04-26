"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { fetchCartDetails, fetchProductCarts } from "@/app/lib/actions/cart-actions";
import { ICartItem } from "@/models/cartItemModel";

export interface orderProducts {
    cartProducts: {
        album: string;
        price: number;
    };
    quantity: number;
}


const OrderSummary = () => {
    const [cartDetailsData, setCartDetailsData] = useState<any>({});
    const [orderProducts, setOrderProducts] = useState<orderProducts[]>([]);
    const [totalAmount, setTotalAmount] = useState<number>(0);

    const getCartDetailsData = async () => {
        try {
            const data = await fetchCartDetails();
            setCartDetailsData((data && data[0]) || {});
        } catch (error: any) {
            console.error("Error fetching cart details:", error.message);
        }
    };

    const getCartProducts = async () => {
        try {
            const data = await fetchProductCarts();
            if (data) {
                const formattedData = data.map((item: any) => ({
                    cartProducts: {
                        album: item.product_id.album,
                        price: item.product_id.price
                    },
                    quantity: item.quantity
                }));
                setOrderProducts(formattedData);
            } else {
                console.error("Data is undefined");
            }
        } catch (error: any) {
            console.error("Error fetching products details:", error.message);
        }
    }
    

    const formatCreationDate = (dateString: string) => {
        const parts = dateString?.split('T');
        return parts[0];
    };

    useEffect(() => {
        getCartDetailsData();
        getCartProducts();
    }, []);

    useEffect(() => {

        const total = orderProducts.reduce((acc, product) => {
            return acc + (product.cartProducts.price * product.quantity);
        }, 0);
        setTotalAmount(total);
    }, [orderProducts]);

    const renderProduct = (product: orderProducts, index: number) => {
        return (
            <div key={index} className="grid grid-cols-3 items-center gap-10">
                <p>{product.cartProducts.album}</p>
                <p>{product.cartProducts.price}</p>
                <p>{product.quantity}</p>
            </div>
        );
    };



    return (
        <div className="bg-white shadow-md py-5 w-[60%] font-mono flex flex-col text-center">
            <h3 className="uppercase pb-5">------- Order summary -------</h3>
            <Image
                className="pb-10 mx-auto"
                width={100}
                height={100}
                src={"/cart.png"}
                alt="logo"
            />
            <div className="flex flex-col items-start px-3 pb-6">
                <p>Order ID: #{cartDetailsData?.id}</p>
                <p>Date: {formatCreationDate(cartDetailsData?.creation_date)}</p>
            </div>
            <span className="pb-5 block">------------------------------</span>
            <div className="text-left  px-3">
                {orderProducts?.map((product: orderProducts, index: number) => (
                    renderProduct(product, index)
                ))}
                <span className="pb-5 block">------------------------------</span>
                <p>Total: $ {totalAmount.toFixed(2)}</p>
            </div>
            <span className="pb-5 block">------------------------------</span>
            <p className="text-bold text-xs">THANK YOU FOR SHOPPING!</p>
        </div>
    );
};

export default OrderSummary;
