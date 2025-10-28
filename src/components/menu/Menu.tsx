import {Link} from "react-router-dom";

export const Menu = () => {
    return (
        <ul>
            <li><Link to={'/'}>Home Page</Link></li>
            <li><Link to={'login'}>login Page</Link></li>
            <li><Link to={'products'}>Products Page</Link></li>
        </ul>
    );
};