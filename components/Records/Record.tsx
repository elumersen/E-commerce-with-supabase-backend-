import { IRecordsHistory } from "@/models/recordsHistoryModels";

export type RecordProps = {
  ordersWithPurchasedProducts: IRecordsHistory;
};

const Record = ({ ordersWithPurchasedProducts }: RecordProps) => {
  const { order_date, id, purchased_products, cart_id } = ordersWithPurchasedProducts;
  const statusOrder = cart_id.completed ? "completed" : "pending";

  const renderPurchasedProducts = () => {
    return purchased_products.map((product: any, index: number) => (
      <div className="flex flex-col" key={index}>
        <p>{product.album}</p>
        <p>{product.price}</p>
      </div>
    ));
  };

  return (
    <div className="flex flex-col">
      <p>{order_date} - {statusOrder}</p>
      <p className="font-bold">{id}</p>
      {renderPurchasedProducts()}
    </div>
  );
};

export default Record;
