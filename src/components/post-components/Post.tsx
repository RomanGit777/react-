import './post.css'
import type {IPostModel} from "../../models/postModel.ts";
import type {FC} from "react";

type PostPropsType = {
    post: IPostModel;
}

export const Post: FC<PostPropsType> = ({post}) => {
    return (
        <div className={'box'}>
            <p>User ID: {post.userId}</p>
            <p>Post ID: {post.id}</p>
            <h3>Title: {post.title}</h3>
            <p>Body: {post.body}</p>
        </div>
    );
};