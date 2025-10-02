import {createRoot} from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout.tsx";
import {APage} from "./pages/APage.tsx";
import {BPage} from "./pages/BPage.tsx";
import {HomePage} from "./pages/HomePage.tsx";

const router = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>,
            children:
                    [
                        {path: '/a', element: <APage/>},
                        {path: '', element: <HomePage/>},
                        {path: '/b', element: <BPage/>, children:
                                [
                                    {path: '1', element: <div>1 content</div>},
                                    {path: '2', element: <div>2 content</div>},
                                    {path: '3', element: <div>3 content</div>}
                                ]
                        }
                    ]
    },

])

createRoot(document.getElementById('root')!)
    .render(<RouterProvider router={router}/>)
