import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import {UsersPage} from "../pages/UsersPage.tsx";
import {UsersJsonPage} from "../pages/UsersJsonPage.tsx";
import {UsersDummyPage} from "../pages/UsersDummyPage.tsx";
import {PostsPage} from "../pages/PostsPage.tsx";
import {PostsJsonPage} from "../pages/PostsJsonPage.tsx";
import {PostsDummyPage} from "../pages/PostsDummyPage.tsx";
import { CommentsPage } from "../pages/CommentsPage.tsx";
import {CommentsJsonPage} from "../pages/CommentsJsonPage.tsx";
import {CommentsDummyPage} from "../pages/CommentsDummyPage.tsx";
import {HomePage} from "../pages/HomePage.tsx";

export const routes = createBrowserRouter([
    {path: '/', element: <App/>, children: [

            {index:true, element:<HomePage/>},

            {path:'users',element:<UsersPage/>, children:[
                    {path: 'jsonplaceholder', element: <UsersJsonPage/>},
                    {path: 'dummyjson', element: <UsersDummyPage/>}
                ]},

            {path:'posts',element:<PostsPage/>, children:[
                    {path: 'jsonplaceholder', element: <PostsJsonPage/>},
                    {path: 'dummyjson', element: <PostsDummyPage/>}
                ]},

            {path:'comments',element:<CommentsPage/>, children:[
                    {path: 'jsonplaceholder', element: <CommentsJsonPage/>},
                    {path: 'dummyjson', element: <CommentsDummyPage/>}
                ]},
        ]},
])