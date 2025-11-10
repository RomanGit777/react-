import {Outlet} from "react-router-dom";
import {UsersComponent} from "../components/users-component/UsersComponent.tsx";

export const UsersPage = () => {
    return (
        <div>
            Users Page
            <Outlet/>
            <UsersComponent/>
        </div>
    );
};