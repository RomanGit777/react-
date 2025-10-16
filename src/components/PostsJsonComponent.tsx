import {useEffect, useState} from "react";
import type {IPostJSON} from "../models/IPostJSON.ts";
import {commentService} from "../services/api.ts";
import {PostComponentJSON} from "./PostComponentJSON.tsx";

export const PostsJsonComponent = () => {

    const [posts, setPosts] = useState<IPostJSON[]>([]);
    useEffect(() => {
        commentService.getPostsJSON().then(allPostsJSON => {
            setPosts(allPostsJSON)
        });
    }, [])


    return (
        <>
            {posts.map(post => <PostComponentJSON key={post.id} post={post} />)}
        </>
    );
};