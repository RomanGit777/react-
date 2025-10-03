import {Menu} from "../menu/Menu.tsx";
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