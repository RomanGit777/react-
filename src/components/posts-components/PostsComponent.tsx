import {PostComponent} from "./PostComponent.tsx";
import {useAppSelector} from "../../redux/hooks/useAppSelector.ts";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";
import {useEffect} from "react";
import {postSliceActions} from "../../redux/slices/postSlice/postSlice.ts";

export const PostsComponent = () => {
   const {posts} = useAppSelector(({postSlice}) => postSlice);
   const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(postSliceActions.loadPosts())
    }, []);

    return (
        <div>

            {posts.map((post) => (
                <div key={post.id}> {post.id} - {post.title}</div>
            ))}

            <PostComponent/>
        </div>
    );
};