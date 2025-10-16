import {useEffect, useState} from "react";
import type {IPostDummy} from "../models/IPostDummy.ts";
import {PostsService} from "../services/api.ts";
import { PostDummyComponent } from "./PostDummyComponent.tsx";

export const PostsDummyComponent = () => {

    const [posts, setPosts] = useState<IPostDummy | null>(null);

    useEffect(() => {
        PostsService.getPostsDummy()
            .then(res => {
                setPosts(res)
            })
    }, [])
    if(!posts) return <div>loading...</div>;


    return (
        <><PostDummyComponent post={posts} /></>
    );
};