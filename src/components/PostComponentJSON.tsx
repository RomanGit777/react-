import type {IPostJSON} from "../models/IPostJSON.ts";
import type {FC} from "react";

type TypePropPostsJSON = {
    post: IPostJSON
}
export const PostComponentJSON: FC<TypePropPostsJSON> = ({post}) => {
    return (
        <div className={'m-3.5'}>
            {post.id}
            {post.userId}
            {post.title}
            {post.body}
        </div>
    );
};