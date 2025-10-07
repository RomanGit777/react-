import { Users } from "../components/users/Users";
import {Outlet} from "react-router-dom";

export const UsersPage = () => {
    return (
        <>
            <Users/>
            <hr/>
            <Outlet/>
        </>
    );
};