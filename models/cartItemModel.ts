import { IProduct } from "./productModel";
export interface ICartItem {
  id: number;
  quantity: number;
  product_id: IProduct;
}
