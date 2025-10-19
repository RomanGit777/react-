import type {IUserBaseResponse} from "../models/IUserBaseResponse.ts";
import type {ICartBaseResponse} from "../models/ICartBaseResponse.ts";

export const baseUrl = 'https://dummyjson.com';

export const userService = {
    getAllUsers: async (): Promise<IUserBaseResponse> => {
        return await
            fetch(baseUrl + "/users")
                .then((res) => res.json())
    }
}

export const cartService = {
    getCartsOfUser: async (userId: string): Promise<ICartBaseResponse> => {
        return await fetch(baseUrl + '/carts/user/' + userId)
                .then(res => res.json())
    }
}