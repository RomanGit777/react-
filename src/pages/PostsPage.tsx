import { Outlet } from "react-router-dom";
import {PostsComponent} from "../components/PostsComponent.tsx";

export const PostsPage = () => {
    return (
        <>
            <PostsComponent/>
            <hr/>
            <Outlet/>
        </>
    );
};