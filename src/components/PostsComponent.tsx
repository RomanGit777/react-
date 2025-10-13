import { Link } from "react-router-dom";

export const PostsComponent = () => {
    return (
        <ul>
            <li><Link to={'jsonplaceholder'}>Posts objects json</Link></li>
            <li><Link to={'dummyjson'}>Posts objects dummy</Link></li>
        </ul>
    );
};