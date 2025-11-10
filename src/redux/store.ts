import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
       userSlice: userSlice.reducer,
       postSlice: postSlice.reducer
    }
})