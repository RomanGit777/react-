import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "./slices/userSlice/userSlice.ts";
import {postSlice} from "./slices/postSlice/postSlice.ts";

export const store = configureStore({ // this creates a redux store - a single place where all your app's state lives
    reducer: {
        userSlice: userSlice.reducer,
        postSlice: postSlice.reducer
    }
});