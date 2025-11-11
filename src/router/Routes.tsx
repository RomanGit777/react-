import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout.tsx";
import {UsersPage} from "../pages/UsersPage.tsx";
import {PostsPage} from "../pages/PostsPage.tsx";
import {HomePage} from "../pages/HomePage.tsx";
import {UserPage} from "../pages/UserPage.tsx";

export const routes = createBrowserRouter([
    {path: '/', element: <MainLayout/>, children: [
            {index: true, element: <HomePage/>},
            {path: 'users', element: <UsersPage/>},
            {path: 'users/:id', element: <UserPage/>},
            {path: 'posts', element: <PostsPage/>}
        ]}
])