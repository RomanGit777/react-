import {configureStore, createSlice} from "@reduxjs/toolkit";
import type { IUser } from "../models/IUser";
import type {IPost} from "../models/IPost.ts";
import type {IComment} from "../models/IComment.ts";

type UserSliceType = {
    users: IUser[];
}
const initUserSlice: UserSliceType = {
    users: []
}
const userSlice = createSlice({
    name: "userSlice",
    initialState: initUserSlice,
    reducers: {},
    extraReducers: builder => builder,
})

type PostSliceType = {
    posts: IPost[];
}
const initPostSlice: PostSliceType = {
    posts: []
}
const postSlice = createSlice({
    name: "postSlice",
    initialState: initPostSlice,
    reducers: {},
    extraReducers: builder => builder,
})

type CommentSliceType = {
    comments: IComment[];
}
const initCommentSlice: CommentSliceType = {
    comments: []
}
const commentSlice = createSlice({
    name: "commentSlice",
    initialState: initCommentSlice,
    reducers: {},
    extraReducers: builder => builder,
})

export const store = configureStore({
        reducer: {
            userSlice: userSlice.reducer,
            postSlice: postSlice.reducer,
            commentSlice: commentSlice.reducer
        }
    }
)