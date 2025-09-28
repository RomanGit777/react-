import './comment.css'
import type {ICommentsModel} from "../../models/CommentsModel.ts";
import type {FC} from "react";

type CommentPropsType = {
    comment: ICommentsModel
}

export const Comment:FC<CommentPropsType> = ({comment:{id,postId,name,email,body}}) => {
    return (
        <div className={'box'}>
            <p>Post ID: {postId}</p>
            <p>ID: {id}</p>
            <p>name: {name}</p>
            <p>Email: {email}</p>
            <p>Body: {body}</p>
        </div>
    );
};