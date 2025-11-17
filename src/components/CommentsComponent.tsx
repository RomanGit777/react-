import {useAppDispatch, useAppSelector} from "../redux/store.ts";
import {useEffect} from "react";
import {loadComment} from "../redux/slices/CommentSlice.ts";

export const CommentsComponent = () => {

    const {comments} = useAppSelector(({commentSlice}) => commentSlice);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(loadComment());
    }, [])
    return (
        <div>
            {comments.map(comment => <div key={comment.id}>
            <div>{comment.id} - {comment.name}</div>
            </div>)}
        </div>
    );
};