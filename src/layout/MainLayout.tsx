import {Outlet} from "react-router";
import {Menu} from "../menu/Menu.tsx";

export const MainLayout = () => {
    return (
        <>
            <Menu/>
            <Outlet/>
        </>
    );
};