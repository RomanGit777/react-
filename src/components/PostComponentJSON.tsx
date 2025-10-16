import type {IPostJSON} from "../models/IPostJSON.ts";
import type {FC} from "react";

type TypePropPostsJSON = {
    post: IPostJSON
}
export const PostComponentJSON: FC<TypePropPostsJSON> = ({post}) => {
    return (
        <div className={'m-3.5'}>
            <p>Post Id: {post.id}</p>
            <p>User Id: {post.userId}</p>
            <p>Title: {post.title}</p>
            <p>Body: {post.body}</p>
        </div>
    );
};