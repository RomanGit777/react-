import type {IUserBaseResponse} from "../models/IUserBaseResponse.ts";

export const baseUrl = 'https://dummyjson.com'

export const userService = {
    getAllUsers: async (): Promise<IUserBaseResponse> => {
        let skip = 0;
        return await fetch(baseUrl + '/users'+'?skip='+skip)
            .then(res => res.json())
    }
}