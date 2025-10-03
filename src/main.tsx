import {createRoot} from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const routes = createBrowserRouter([
    {index: true, element: <Layout/>}
])
createRoot(document.getElementById('root')!)
    .render(<RouterProvider router={routes}/>)
