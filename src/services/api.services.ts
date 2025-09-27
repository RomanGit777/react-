import type {IUser} from "../models/IUser.ts";

export const getUsers = async (): Promise<IUser[]> => {
    return await fetch(import.meta.env.VITE_API_URL)
        .then(res => res.json())
}
export const getUser = async (id:string): Promise<IUser> => {
    return await fetch(import.meta.env.VITE_API_URL + '/' + id )
        .then(res => res.json())
}