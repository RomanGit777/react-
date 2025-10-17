import {Link} from "react-router";

export const Menu = () => {
    return (
        <ul>
            <li><Link to={'users'}>users</Link></li>
            <li><Link to={'posts'}>posts</Link></li>
        </ul>
    );
};