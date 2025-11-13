import {useQuery} from "@tanstack/react-query";
import type {IUser} from "./GetUsers.ts";
import axios from "axios";

export function GetUser(id: number) {
    return useQuery<IUser>({
        queryKey: ['users', id],
        queryFn: (): Promise<IUser> =>
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => res.data)
    })
}