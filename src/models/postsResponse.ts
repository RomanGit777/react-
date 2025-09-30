import type {IPostModel} from "./postModel.ts";

export  interface IPostsResponse{
    posts: IPostModel[],
    total: number,
    skip: number,
    limit: number
}