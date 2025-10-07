import {useParams} from "react-router-dom";
import {Posts} from "../components/Posts/Posts.tsx";

export const PostsPage = () => {
    const {userId} = useParams();

    return (
        <>
            {userId && <Posts userId={userId} />}
        </>
    )
}