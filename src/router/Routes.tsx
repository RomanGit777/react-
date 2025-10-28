import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layout/MainLayout.tsx";
import {LoginPage} from "../pages/LoginPage.tsx";
import {AuthProductsPage} from "../pages/AuthProductsPage.tsx";
import {HomePage} from "../pages/HomePage.tsx";

export const routes = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children: [
            {index: true, element: <HomePage/>},
            {path: 'login', element: <LoginPage/>},
            {path: 'products', element: <AuthProductsPage/>}
        ]
    }
])