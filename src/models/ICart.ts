import type { productsItem } from "./IProduct";

export interface ICart {
	discountedTotal: number;
	total: number;
	totalQuantity: number;
	totalProducts: number;
	id: number;
	userId: number;
	products: productsItem[];
}



