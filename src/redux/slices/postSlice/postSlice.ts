import { createSlice } from "@reduxjs/toolkit";
import type {IPost} from "../../../models/IPost.ts";

type postSliceType = {
   posts: IPost[],
   loadState: boolean
}
export const initialState: postSliceType = {posts: [], loadState: false};

export const postSlice = createSlice({
    name: "postSlice",
    initialState: initialState,
    reducers: {},
    extraReducers: builder =>
})