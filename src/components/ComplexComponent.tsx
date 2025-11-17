import {useAppDispatch, useAppSelector} from "../redux/store.ts";
import {useEffect} from "react";
import {userSliceActions} from "../redux/slices/UserSlice.ts";
import {postSliceActions} from "../redux/slices/PostSlice.ts";
import {commentSliceActions} from "../redux/slices/CommentSlice.ts";

export const ComplexComponent = () => {
    const dispatch = useAppDispatch();
    const {userSlice: {users}, commentSlice: {comments}, postSlice: {posts}} = useAppSelector(state => state);
    useEffect(() => {
        if (!users.length) {
            dispatch(userSliceActions.loadUser())
        }
        if (!posts.length) {
            dispatch(postSliceActions.loadPost())
        }
        if (!comments.length) {
            dispatch(commentSliceActions.loadComment())
        }

    }, []);
    return (
        <div>
            {users.map(user =>
                <div key={user.id}>
                    <div>{user.id} - {user.name}</div>
                </div>
            )}
            {posts.map(post => <div key={post.id}>
                <div>{post.id} - {post.title}</div>
            </div>)}
            {comments.map(comment => <div key={comment.id}>
                <div>{comment.id} - {comment.name}</div>
            </div>)}
        </div>
    );
};