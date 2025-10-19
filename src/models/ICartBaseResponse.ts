import type {ICart} from "./ICart.ts";

export interface ICartBaseResponse {
    total: number;
    skip: number;
    limit: number;
    carts: ICart[];
}