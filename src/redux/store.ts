import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "./slices/UserSlice.ts";
import {postSlice} from "./slices/PostSlice.ts";
import {commentSlice} from "./slices/CommentSlice.ts";


export const store = configureStore({
        reducer: {
            userSlice: userSlice.reducer,
            postSlice: postSlice.reducer,
            commentSlice: commentSlice.reducer
        }
    }
)