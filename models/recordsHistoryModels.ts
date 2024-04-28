export interface IRecordsHistory {
    id: number;
    order_date: string;
    cart_id: {
      id: number;
      completed: boolean;
    };
    purchased_products: {
      album: string;
      price: number;
    }[];
  }