"use client";

import { TRecords } from "@/types";
import { IRecordsHistory } from "@/models/recordsHistoryModels";
import Record from "./Record";

const RecordGrid = ({
  records,
  recordCartDetails,
}: {
  records: TRecords;
  recordCartDetails: any;
}) => {

    const cartProductsMap = recordCartDetails.reduce((acc: any, record: any) => {
        const { cart_id, product_id } = record;
        if (!acc[cart_id.id]) {
          acc[cart_id.id] = [];
        }
        acc[cart_id.id].push(product_id);
        return acc;
      }, {});

      const ordersWithPurchasedProducts = records.map((order: any) => ({
        ...order,
        purchased_products: cartProductsMap[order.cart_id.id] || []
      }));
      
      console.log('cart', ordersWithPurchasedProducts)

  return (
    <div>
      {ordersWithPurchasedProducts.map((ordersWithPurchasedProducts: IRecordsHistory) => (
        <Record key={ordersWithPurchasedProducts.id} ordersWithPurchasedProducts={ordersWithPurchasedProducts} />
      ))}
    </div>
  );
};

export default RecordGrid;
