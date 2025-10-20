import type {IUserBaseResponse} from "../models/IUserBaseResponse.ts";

export const baseUrl = "https://dummyjson.com";

export const userService = {
    getAllUsers: async (): Promise<IUserBaseResponse> => {
        return await fetch(baseUrl + '/users')
            .then(response => response.json());
    }
}