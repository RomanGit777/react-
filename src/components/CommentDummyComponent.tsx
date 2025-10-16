import type { FC } from "react";
import type { ICommentDummy } from "../models/ICommentDummy.ts";

type PropTypeDummyComment = {
    comments: ICommentDummy;
};

export const CommentDummyComponent: FC<PropTypeDummyComment> = ({ comments }) => {
    return (
        <div>

            <h2>Comments from DummyJSON</h2>
            <hr/>
            {comments.comments.map(c => (
                <div key={c.id} style={{ marginBottom: "1rem" }}>
                    <p><b>ID:</b> {c.id}</p>
                    <p><b>Post ID:</b> {c.postId}</p>
                    <p><b>Body:</b> {c.body}</p>
                    <p><b>User:</b> {c.user.fullName} ({c.user.username})</p>
                    <p><b>Likes:</b> {c.likes}</p>
                    <hr />
                </div>
            ))}


            <p>Total: {comments.total}</p>
            <p>Limit: {comments.limit}</p>
            <p>Skip: {comments.skip}</p>

        </div>
    );
};
