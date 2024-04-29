import { IRecordsHistory } from "@/models/recordsHistoryModels";

export type RecordProps = {
  ordersWithPurchasedProducts: IRecordsHistory;
};

const Record = ({ ordersWithPurchasedProducts }: RecordProps) => {
  const { order_date, id, purchased_products, cart_id, total } =
    ordersWithPurchasedProducts;
  const statusOrder = cart_id.completed ? "completed" : "pending";

  const renderPurchasedProducts = () => {
    return purchased_products?.map((product: any, index: number) => (
      <div className="flex flex-row w-full justify-between text-sm text-gray-400" key={index}>
        <div className="flex flex-row">
          <p className="pr-3">{product.album}</p>
          <span className="pr-2">-</span>
          <p className="pr-2">{product.price}$</p>
        </div> 
        <p>x {product.quantity}</p>
      </div>
    ));
  };
  return (
    <div className="flex flex-col p-5 mb-5 bg-slate-200 w-full rounded-md overflow-y-auto">
      <div className="flex flex-row justify-between w-full">
        <p className="font-bold pb-2 text-base">
          Order
          <span className="text-gray-600 inline-block px-1">#{id}</span>
        </p>
        <p>{statusOrder}</p>
      </div>
      <p className="pb-2">{order_date}</p>
      <div className="flex flex-col pb-4">
        <div className="flex flex-row justify-between w-full">
        <p className="text-sm font-bold pb-2">Purchased products</p>
        <p className="text-sm font-bold pb-2">Amount</p>

        </div>
        <div>{renderPurchasedProducts()}</div>
      </div>
      <hr className="pb-2" />
      <div className="flex flex-row text-sm  pb-2">
        <p className="font-bold pr-2">Total: </p>
        <p>{total} $</p>
      </div>
    </div>
  );
};

export default Record;
