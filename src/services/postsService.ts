import type {IPostModel} from "../models/postModel.ts";
import type {IPostsResponse} from "../models/postsResponse.ts";

const endpoint = import.meta.env.VITE_API_BASE_URL + '/posts';

export const loadPosts = async (): Promise<IPostModel[]> => {
    const response:IPostsResponse = await fetch(endpoint) .then(res => res.json());
    return response.posts;
}