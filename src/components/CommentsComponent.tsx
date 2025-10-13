import {Link} from "react-router-dom";

export const CommentsComponent = () => {
    return (
        <ul>
            <li><Link to={'jsonplaceholder'}>Comments objects json</Link></li>
            <li><Link to={'dummyjson'}>Comments objects dummy</Link></li>
        </ul>
    );
};