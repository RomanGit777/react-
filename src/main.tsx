import {createRoot} from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from './App';
import {UsersDummyPage} from "./pages/UsersDummyPage.tsx";
import { UsersJSONPage } from './pages/UsersJSONPage';
import {UsersPage} from "./pages/UsersPage.tsx";
import {PostsPage} from "./pages/PostsPage.tsx";
import { PostsJSONPage } from './pages/PostsJSONPage';
import {PostsDummyPage} from "./pages/PostsDummyPage.tsx";
import {CommentsPage} from "./pages/CommentsPage.tsx";

const routes = createBrowserRouter([
    {path: '', element: <App/>, children:[
            {path:'users',element:<UsersPage/>, children:[
                    {path:'jsonplaceholder', element: <UsersJSONPage/>},
                    {path:'dummyjson', element: <UsersDummyPage/>}
                ]},
            {path:'posts',element:<PostsPage/>, children:[
                    {path:'jsonplaceholder', element: <PostsJSONPage/>},
                    {path:'dummyjson', element: <PostsDummyPage/>}
                ]},
            {path:'comments/jsonplaceholder',element:<CommentsPage/>},
        ]}
])

createRoot(document.getElementById('root')!)
    .render(<RouterProvider router={routes}/>)
