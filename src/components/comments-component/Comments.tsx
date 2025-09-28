import type {ICommentsModel} from "../../models/CommentsModel.ts";
import {useEffect, useState} from "react";
import {loadComments} from "../../services/commentService.ts";
import {Comment} from "../comment-component/Comment.tsx";

export const Comments = () => {
    const [comments, setComments] = useState<ICommentsModel[]>([]);
    useEffect(() => {
        loadComments() .then(value => setComments(value));
    })
    return (
        <>
            {
                comments.map(comment => <Comment key={comment.id} comment={comment} />)
            }
        </>
    );
};