import type {IUserBaseResponse} from "../models/IUserBaseResponse.ts";
import type {ICartBaseResponse} from "../models/ICartBaseResponse.ts";

export const baseUrl = "https://dummyjson.com";

export const userService = {
    getAllUsers: async (): Promise<IUserBaseResponse> => {
        return await fetch(baseUrl + '/users')
            .then(response => response.json());
    }
}

export const cartService = {
    getCartOfUser: async (userId: string): Promise<ICartBaseResponse> => {
        return await fetch(baseUrl + '/carts/user/' + userId)
            .then(response => response.json());
    }
}