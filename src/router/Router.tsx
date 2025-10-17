import {createBrowserRouter} from "react-router";
import {MainLayout} from "../Layout/MainLayout.tsx";

export const routes = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children: [

        ]
    }
])