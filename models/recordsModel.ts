export interface IRecords {
  id: number;
  order_date: string;
  cart_id: {
    id: number,
    completed: boolean;
  };
}
