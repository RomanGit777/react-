import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";

export const routes = createBrowserRouter([
    {path: '/', element: <App/>, children: [
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