import type {IUserModel} from "../models/IUserModel.ts";

const VITE_API_URL = 'https://jsonplaceholder.typicode.com/users';

export const userService = {
    async loadUsers(): Promise<IUserModel[]> {
        const res = await fetch(VITE_API_URL)
            return res.json()
    },
    async loadUser(id:string): Promise<IUserModel> {
        const res = await fetch(VITE_API_URL + '/' + id);
        return res.json();
    }
}