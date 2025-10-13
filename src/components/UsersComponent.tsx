import {Link} from "react-router-dom";

export const UsersComponent = () => {
    return (
        <ul>
            <li><Link to={'jsonplaceholder'}>Users objects json</Link></li>
            <li><Link to={'dummyjson'}>Users objects dummy</Link></li>
        </ul>
    );
};