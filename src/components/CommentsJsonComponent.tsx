import {useEffect, useState} from "react";
import type {ICommentJSON} from "../models/ICommentJSON.ts";

export const CommentsJsonComponent = () => {

    const [comments, setComments] = useState<ICommentJSON[]>([]);

    useEffect(() => {
        commentService.getComments().then(allComments) => setComments(allComments);
    }, [])


    return (
        <div>

            comments.map(comment => <CommentComponent key={} item={} />)
        </div>
    );
};