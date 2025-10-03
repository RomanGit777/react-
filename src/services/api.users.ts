import type {IUser} from "../models/IUser.ts";

const baseUrl = 'https://jsonplaceholder.typicode.com';

export const userService ={
    getUsers: async (): Promise<IUser[]> => {
    return await fetch(baseUrl + '/users')
        .then((res) => res.json())
}}