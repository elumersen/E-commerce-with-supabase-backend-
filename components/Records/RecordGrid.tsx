"use client";

import { IRecordsHistory } from "@/models/recordsHistoryModels";
import Record from "./Record";
// import { ICartDetails } from "@/models/cartDetailsModel";

type PurchasedProduct = {
  album: string;
  price: number;
  quantity: number;
};

type RecordWithPurchasedProducts = IRecordsHistory & {
  purchased_products: PurchasedProduct[];
};

interface ICartDetails {
  cart_id: { id: string };
  product_id: PurchasedProduct;
  quantity: number;
}

type RecordGridProps = {
  records: IRecordsHistory[];
  recordCartDetails: ICartDetails[]; 
};


const RecordGrid = ({ records, recordCartDetails }: RecordGridProps) => {
  
  const cartProductsMap: Record<string, PurchasedProduct[]> = recordCartDetails.reduce((acc: Record<string, PurchasedProduct[]>, record) => {
    const { cart_id, product_id, quantity } = record;
  
    if (!acc[cart_id.id]) {
      acc[cart_id.id] = [];
    }
    const productWithQuantity = { ...product_id, quantity };
    acc[cart_id.id].push(productWithQuantity);
    return acc;
  }, {});
  

  const ordersWithPurchasedProducts: RecordWithPurchasedProducts[] = records.map((record) => ({
    ...record,
    purchased_products: cartProductsMap[record.cart_id.id] || [],
  }));

  if (records.length === 0) {
    return <p>No records found</p>;
  }

  return (
    <>
      {ordersWithPurchasedProducts.map((order) => (
        <Record key={order.id} ordersWithPurchasedProducts={order} />
      ))}
    </>
  );
};

export default RecordGrid;
