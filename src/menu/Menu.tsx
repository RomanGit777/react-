import {Link} from "react-router-dom";

export const Menu = () => {
    return (
        <ul>
            <li><Link to={'/'}>Home Page</Link></li>
            <li><Link to={'users'}>Users Page</Link></li>
            <li><Link to={'user/:id'}>User Page</Link></li>
            <li><Link to={'posts'}>Posts page</Link></li>
        </ul>
    );
};