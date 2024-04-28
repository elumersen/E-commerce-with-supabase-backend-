export interface ICartDetails {
    quantity: number;
    user_id: string;
    cart_id: {
      id: number;
      completed: boolean;
    }[];
    product_id: {
      album: string;
      price: string;
    }[];
  }