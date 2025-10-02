import {createRoot} from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { Layout } from './layouts/Layout';

const routes = createBrowserRouter([
    {path:'', element: <Layout/>, children:[
            {index:true, element:<HomePage/>},
            {path: 'users', element:<UsersPage/>},
            {path: 'posts', element:<PostsPage/>},
        ]}
]) ;

createRoot(document.getElementById('root')!)
    .render(<RouterProvider router={routes}/>)
