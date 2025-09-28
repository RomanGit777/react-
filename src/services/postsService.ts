import type {IPostModel} from "../models/postModel.ts";

const endpoint = import.meta.env.VITE_API_BASE_URL + '/posts';

export const loadPosts = async (): Promise<IPostModel[]> => {
    return await fetch(endpoint) .then(res => res.json())
}