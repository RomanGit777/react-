import {useAppDispatch, useAppSelector} from "../redux/store.ts";
import {loadPost} from "../redux/slices/PostSlice.ts";
import {useEffect} from "react";

export const PostsComponent = () => {
    const {posts} = useAppSelector(({postSlice}) => postSlice);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(loadPost());
    },[])
    return (
        <div>
            {posts.map(post => <div key={post.id}>
                <div>{post.id} - {post.title}</div>
            </div>)}
        </div>
    );
};