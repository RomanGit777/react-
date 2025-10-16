import {useEffect, useState} from "react";
import type {IPostJSON} from "../models/IPostJSON.ts";
import {PostsService} from "../services/api.ts";
import {PostComponentJSON} from "./PostComponentJSON.tsx";

export const PostsJsonComponent = () => {

    const [posts, setPosts] = useState<IPostJSON[]>([]);
    useEffect(() => {
        PostsService.getPostsJSON().then(allPostsJSON => {
            setPosts(allPostsJSON)
        });
    }, [])
    if(!posts) return <div>Loading...</div>;

    return (
        <>
            {posts.map(post => <PostComponentJSON key={post.id} post={post} />)}
        </>
    );
};