import type {IProductResponse} from "../models/ProductResponse.ts";
import type {IProductModel} from "../models/ProductModel.ts";

const endpointProducts = import.meta.env.VITE_API_BASE_URL + '/products';

export const loadProducts = async (): Promise<IProductModel[]> => {
    const response: IProductResponse = await fetch(endpointProducts)
        .then(res => res.json());
    return response.products;
}