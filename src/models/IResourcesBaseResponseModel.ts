import type {IProduct} from "./IProduct.ts";

export interface IResourcesBaseResponseModel {
    limit: number;
    skip: number;
    total: number;
    products: IProduct[];
}