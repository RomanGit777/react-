import type {IProductModel} from "./ProductModel.ts";

export interface IProductResponse {
    products: IProductModel[],
    total: number,
    skip: number,
    limit: number
}