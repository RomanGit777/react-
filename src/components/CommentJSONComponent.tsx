import type {FC} from "react";
import type {ICommentJSON} from "../models/ICommentJSON.ts";

type PropTypeComment = {
    comment: ICommentJSON
}
export const CommentJSONComponent: FC<PropTypeComment> = ({comment}) => {
    return (
        <div className={'m-3.5'}>
            <p>Id: {comment.id}</p>
            <p>Post Id: {comment.postId}</p>
            <h4>Name: {comment.name}</h4>
            <h6>Body: {comment.body}</h6>
            <p>Email: {comment.email}</p>
        </div>
    );
};