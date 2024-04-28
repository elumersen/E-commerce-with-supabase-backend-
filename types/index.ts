import { IProduct } from '@/models/productModel';
import { ICartItem } from '@/models/cartItemModel';
import { IRecords } from '@/models/recordsModel';
import { IRecordsHistory } from "@/models/recordsHistoryModels";
import { ICartDetails } from '@/models/cartDetailsModel';
import { IShoppingHistory } from '@/models/shoppingHistory';

export type TProducts = IProduct[];
export type TProduct = IProduct;
export type TCartItem = ICartItem[];
export type TRecords = IRecords[];
export type TRecordsHistory = IRecordsHistory[]
export type TCartDetailsResponse = ICartDetails[] | undefined;
export type TShoppingHistoryResponse = IShoppingHistory [] | undefined;
