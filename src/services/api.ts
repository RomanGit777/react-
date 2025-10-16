import type {ICommentJSON} from "../models/ICommentJSON";
import {urls} from "../constants/urls.ts";
import type {IPostJSON} from "../models/IPostJSON.ts";
import type {IUsersJSON} from "../models/IUsersJSON.ts";

export const commentService = {
    getCommentsJSON: async (): Promise<ICommentJSON[]> => {
        return await fetch(urls.comments.allCommentsJSON)
            .then(response => response.json())
    },
    getCommentsDummy: async () => {
        return await fetch(urls.comments.allCommentsDummy)
            .then(response => response.json())}
}

export const PostsService = {
    getPostsJSON: async (): Promise<IPostJSON[]> => {
        return await fetch(urls.posts.allPostsJSON)
            .then(response => response.json());
    },
    getPostsDummy: async () => {
        return await fetch(urls.posts.allPostsDummy)
            .then(response => response.json());
    }
}

export const userService = {
    getUserJSON: async ():Promise<IUsersJSON[]> => {
        return await fetch(urls.users.allUsersJSON)
            .then(response => response.json());
    }
}