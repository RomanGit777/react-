import { Menu } from "../menu/Menu";
import {Outlet} from "react-router-dom";

export const Layout = () => {
    return (
        <>
            <Menu/>
            <hr/>
            <Outlet/>
        </>
    );
};