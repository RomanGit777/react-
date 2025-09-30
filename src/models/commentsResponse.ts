import type {ICommentsModel} from "./CommentsModel.ts";

export interface ICommentsResponse {
    comments: ICommentsModel[],
    total: number,
    skip: number,
    limit: number
}