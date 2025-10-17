import {Outlet} from "react-router/internal/react-server-client";
import { Menu } from "../menu/Menu";

export const MainLayout = () => {
    return (
        <>
        <Menu/>
        <Outlet/>
        </>
    );
};