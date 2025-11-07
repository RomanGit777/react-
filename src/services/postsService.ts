import type {IPost} from "../models/IPost.ts";

const API_VITE_URL = 'https://jsonplaceholder.typicode.com/posts';

export const postsService = {
    async loadPosts():Promise<IPost[]> {
       const res=  await fetch(API_VITE_URL)
    return res.json()
}
}
