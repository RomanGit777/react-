import type {IPost} from "../../models/IPost.ts";

interface PostComponentProps {
    posts: IPost
}

export const PostComponent = ({posts}: PostComponentProps) => {
    return (
        <>
            <div className={'m-3.5'}>
             <p>{posts.title}</p>
            </div>
        </>
    );
};