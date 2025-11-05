import {createRoot} from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import {routes} from "./router/Routes.tsx";
import {Provider} from "react-redux";
import {configureStore, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IUserModel} from "./models/IUserModel.ts";

type userSliceType = {
    users: IUserModel[];
}

const initialState: userSliceType = {users: []}

const userSlice = createSlice({
    name: "userSlice", // name of our slice
    initialState: initialState,
    reducers: {
        loadUsers: (state, action: PayloadAction<IUserModel[]>) => {
            state.users = action.payload // we extract users from payload into state.users
        }
    } // there will be a function here that will affect the state
});

const store = configureStore({ // this creates a redux store - a single place where all your app's state lives
    reducer: {
        userSlice: userSlice.reducer
        // postSlice: null
    }
});

createRoot(document.getElementById('root')!)
    .render(        // The Provider makes the redux store available for all components in router
        <Provider store={store}>
            <RouterProvider router={routes}/>
        </Provider>
    )
