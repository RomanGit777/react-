import { UsersCompoment } from "../component/users-component/UsersCompoment";
import {Outlet} from "react-router";

export const UsersPage = () => {
    return (
        <>
            <hr/>
            <Outlet/>
            <hr/>
            <UsersCompoment/>
        </>
    );
};