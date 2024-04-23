import { IProduct } from './productModel';

export interface ICartItem {
    id: number;
    product: IProduct; 
    quantity: number; 
  }
  