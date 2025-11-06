import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../Layout/MainLayout.tsx";
import {UsersPage} from "../pages/UsersPage.tsx";
import { UserPage } from "../pages/UserPage.tsx";
import {PostsPage} from "../pages/PostsPage.tsx";

export const routes = createBrowserRouter([
    {path:'/', element:<MainLayout/>, children: [
            {path: 'users', element:<UsersPage/>},
            {path: 'user/:id', element:<UserPage/>},
            {path: 'posts', element:<PostsPage/>}
        ]},
])