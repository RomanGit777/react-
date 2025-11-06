import {Link} from "react-router-dom";

export const Menu = () => {
    return (
        <ul>
            <li><Link to={'users'}>users</Link></li>
            <Link to={'/user/1'}>user 1</Link>
            <li><Link to={'posts'}>posts</Link></li>
        </ul>
    );
};