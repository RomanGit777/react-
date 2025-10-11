import {Link, Outlet} from "react-router-dom";

export const UsersPage = () => {
    return (
        <>
            <ul>
                <li><Link to={'jsonplaceholder'}>users jsonplaceholder</Link></li>
                <li><Link to={'dummyjson'}>users dummyjson</Link></li>
            </ul>
            <Outlet/>
        </>
    );
};