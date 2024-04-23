import { ICart } from './cart';
import { IProduct } from './productModel';

export interface ICartProductsDetails extends ICart {
    products: IProduct[];
  }