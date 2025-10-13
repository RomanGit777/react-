import {Outlet} from "react-router-dom";
import {CommentsComponent} from "../components/CommentsComponent.tsx";

export const CommentsPage = () => {
    return (
        <>
            <CommentsComponent/>
            <hr/>
            <Outlet/>
        </>
    );
};