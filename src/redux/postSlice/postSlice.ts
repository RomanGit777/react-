import { createSlice } from "@reduxjs/toolkit"
import type {IPost} from "../../model/IPost.ts";

type postsSliceType = {
    posts: IPost[];
}

export const initialState: postsSliceType = {
    posts: []
}

export const postSlice = createSlice({
    name: "postSlice",
    initialState: initialState,
    reducers: {}
})