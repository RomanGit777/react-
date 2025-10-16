import { useEffect, useState } from "react";
import { commentService } from "../services/api.ts";
import { CommentDummyComponent } from "./CommentDummyComponent.tsx";
import type { ICommentDummy } from "../models/ICommentDummy.ts";

export const CommentsDummyComponent = () => {
    const [data, setData] = useState<ICommentDummy | null>(null);

    useEffect(() => {
        commentService.getCommentsDummy().then(response => {
            setData(response);
        });
    }, []);
    if (!data) return <div>Loading...</div>;

    return (
        <CommentDummyComponent comments={data} />
    );
};
