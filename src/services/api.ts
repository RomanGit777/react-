import type {ICommentJSON} from "../models/ICommentJSON";
import {urls} from "../constants/urls.ts";
import type {IPostJSON} from "../models/IPostJSON.ts";

export const commentService = {
    getCommentsJSON: async (): Promise<ICommentJSON[]> => {
        return await fetch(urls.comments.allCommentsJSON)
            .then(response => response.json())
    },
    getCommentsDummy: async () => {
        const res = await fetch(urls.comments.allCommentsDummy);
        return res.json();
    },

    getPostsJSON: async (): Promise<IPostJSON[]> => {
        return await fetch(urls.posts.allPostsJSON)
            .then(response => response.json())
    },

}
