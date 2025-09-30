import type {ICommentsResponse} from "../models/commentsResponse.ts";

const endpointComments = import.meta.env.VITE_API_BASE_URL + '/comments';

export const loadComments = async () => {
    const response: ICommentsResponse = await fetch(endpointComments) .then(res => res.json());
    return response.comments;
}