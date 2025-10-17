import {PostComponent} from "../post/PostComponent.tsx";
import type {IPost} from "../../models/IPost.ts";
import {useEffect, useState} from "react";
import {getAll} from "../../services/general.api.service.ts";
import type {IBaseResponseModel} from "../../models/IBaseResponseModel.ts";

export const PostsComponent = () => {

    const [posts, setPosts] = useState<IPost[]>([]);
    useEffect(() => {
        getAll<IBaseResponseModel & {posts: IPost[] }>('/posts').then(({posts})=>setPosts(posts));
    }, [])

    return (
        <> {posts.map((posts:IPost) => <PostComponent key={posts.id} posts={posts}/>)}
        </>
    );
};