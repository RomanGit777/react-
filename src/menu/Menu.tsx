import {Link} from "react-router-dom";

export const Menu = () => {
    return (
        <ul>
            <li><Link to={'users'}></Link></li>
            <li><Link to={'users/1'}></Link></li>
            <li><Link to={'posts'}></Link></li>
        </ul>
    );
};