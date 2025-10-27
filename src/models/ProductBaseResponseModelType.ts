import type {IProduct} from "./IProduct";

export type ProductBaseResponseModelType = {
    total: number;
    skip: number;
    limit: number;
    products: IProduct[]

}