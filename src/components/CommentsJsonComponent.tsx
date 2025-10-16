import {useEffect, useState} from "react";
import type {ICommentJSON} from "../models/ICommentJSON.ts";
import {commentService} from "../services/api.ts";
import {CommentJSONComponent} from "./CommentJSONComponent.tsx";

export const CommentsJsonComponent = () => {

    const [comments, setComments] = useState<ICommentJSON[]>([]);

    useEffect(() => {
        commentService.getCommentsJSON().then(allCommentsJSON =>
        {setComments(allCommentsJSON)
        })
    }, [])
    if (!comments) return <div>Loading...</div>;

    return (
        <div>
            {comments.map(comment => <CommentJSONComponent key={comment.id} comment={comment}/>)}
        </div>
    );
};