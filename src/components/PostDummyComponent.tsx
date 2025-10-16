import type {FC} from "react";
import type {IPostDummy} from "../models/IPostDummy.ts";

type TypePropPostDummy = {
    post: IPostDummy
}

export const PostDummyComponent: FC<TypePropPostDummy> = ({post}) => {
    return  <div>
        <div className={'m-3.5'}>
            {post.posts.map((p) => (
                <div key={p.id} >
                <p>ID: {p.id}</p>
                <p>User Id: {p.userId}</p>
                <p>Title: {p.title}</p>
                <p>Body: {p.body}</p>
                <p>Tags: {p.tags.join(', ')}</p>
                <p>Likes: {p.reactions.likes}, Dislikes: {p.reactions.dislikes}</p>
                <p>Views: {p.views}</p>
                <hr/>
            </div>
            ))}

            <hr/>
            <p>Total: {post.total}</p>
            <p>Skip: {post.skip}</p>
            <p>Limit: {post.limit}</p>
        </div>
    </div>;
};