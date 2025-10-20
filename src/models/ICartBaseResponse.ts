import type {ICart} from "./ICart.ts";

export interface ICartBaseResponse {
    total: number;
    limit: number;
    skip: number;
    carts: ICart[];
}