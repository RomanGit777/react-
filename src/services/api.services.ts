import type {IUser} from "../models/IUser.ts";

export const getUsers = async (): Promise<IUser[]> => {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
}
export const getUser = async (id:string): Promise<IUser> => {
    return fetch('https://jsonplaceholder.typicode.com/users/' + id)
        .then(res => res.json())
}