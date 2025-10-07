import {useEffect, useState, type FC} from "react";
import type {IPost} from "../../models/IPost.ts";
import {postService} from "../../services/api.users.ts";


type PostPropsType = {
    userId?: string;
}

export const Posts:FC<PostPropsType> = ({userId}) => {
    const [posts, setPosts] = useState<IPost[]>([]);
    useEffect(() => {
        if (userId) {
            postService.getAllPostsOfUserById(+userId)
                .then(value => setPosts(value))
        }
    },[userId])
    return (
        <>
            {posts.map((value) => <div key={value.id}>{value.title}</div>)}
        </>
    );
};