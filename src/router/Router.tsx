import {createBrowserRouter} from "react-router";
import {MainLayout} from "../layout/MainLayout.tsx";
import { UsersPage } from "../pages/UsersPage.tsx";
import {CartsPage} from "../pages/CartsPage.tsx";

export const routes = createBrowserRouter([
    {path: '/', element: <MainLayout/>, children:[
            {path:'users', element: <UsersPage/>, children:[
                    {path:':id/carts', element: <CartsPage/>}
                ]}
        ]}
])