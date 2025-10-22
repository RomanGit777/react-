import type {IUserBaseResponse} from "../models/IUserBaseResponse.ts";

export const baseUrl = 'https://dummyjson.com'

export const userService = {
    getAllUsers: async (page: string): Promise<IUserBaseResponse> => {
        const limit = 30;
        let skip = limit * (+page) - limit;
        return await fetch(baseUrl + '/users'+'?skip='+skip)
            .then(res => res.json())
    }
}