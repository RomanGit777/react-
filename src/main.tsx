import {createRoot} from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import {routes} from "./router/Routes.tsx";
import {Provider} from "react-redux";
import {store} from "./redux/store.ts";


createRoot(document.getElementById('root')!)
    .render(        // The Provider makes the redux store available for all components in router
        <Provider store={store}>
            <RouterProvider router={routes}/>
        </Provider>
    )
