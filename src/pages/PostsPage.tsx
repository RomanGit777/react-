import {PostsComponent} from "../components/PostsComponent.tsx";
import {useAppSelector} from "../redux/hooks/UseAppSelector.tsx";
import {useAppDispatch} from "../redux/hooks/UseAppDispatch.tsx";
import {useEffect} from "react";
import {postsSliceActions} from "../redux/slices/postSlice/postSlice.ts";

export const PostsPage = () => {

    const {posts,loadState} = useAppSelector(({postSlice}) => postSlice);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(postsSliceActions.loadPosts())
    }, []);

    return (
        <div>

            {!loadState &&<div>Loading... </div>}

            {posts.map((post) =>
                <div key={post.id} className="m-3.5">
                    {post.id} -
                    {post.userId}
                    {post.title}
                    {post.body}
                </div>)}

            <PostsComponent/>
        </div>
    );
};