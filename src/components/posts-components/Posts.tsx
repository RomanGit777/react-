import {useEffect, useState} from "react";
import type {IPostModel} from "../../models/postModel.ts";
import {loadPosts} from "../../services/postsService.ts";
import {Post} from "../post-components/Post.tsx";


export const Posts = () => {
    const [posts, setPosts] = useState<IPostModel[]>([]);
    useEffect(() => {
        loadPosts() .then(value => setPosts(value));
    })

    return (
        <div>
            {
                posts.map((post, index) => <Post key={index}  post={post} />)
            }
        </div>
    );
};