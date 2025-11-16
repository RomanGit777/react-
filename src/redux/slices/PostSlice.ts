import type {IPost} from "../../models/IPost.ts";
import {createSlice} from "@reduxjs/toolkit";

type PostSliceType = {
    posts: IPost[];
}
const initPostSlice: PostSliceType = {
    posts: []
}
export const postSlice = createSlice({
    name: "postSlice",
    initialState: initPostSlice,
    reducers: {},
    extraReducers: builder => builder,
})