import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// Define the User type
export interface IUser {
    id: number;
    name: string;
}

// Custom hook for fetching users
export function GetUsers() {
    return useQuery<IUser[]>({
        queryKey: ['users'], // unique key for caching
        queryFn: (): Promise<IUser[]> =>
            axios.get('https://jsonplaceholder.typicode.com/users').then(res => res.data)
    });
}
