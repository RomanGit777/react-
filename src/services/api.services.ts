import type { IUser } from "../model/IUser";
import type {IPost} from "../model/IPost.ts";

export const API_VITE_BASE_URL = 'https://jsonplaceholder.typicode.com';

export const userService = {
    async loadUsers(): Promise<IUser[]> {
        const res =  await fetch(API_VITE_BASE_URL + '/users');
        return res.json();
    }
}
export const postService = {
    async loadPost(): Promise<IPost[]> {
        const res =  await fetch(API_VITE_BASE_URL + '/posts?_limit=10');
        return res.json();
    }
}