import type {IPost} from "../../models/IPost.ts";
import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {getAll} from "../../service/api.service.ts";

type PostSliceType = {
    posts: IPost[];
}
const initPostSlice: PostSliceType = {
    posts: []
}

export const loadPost = createAsyncThunk(
    'postSlice/postLoad',
    async (_, thunkAPI) => {
        try {
        const posts = await getAll<IPost[]>('/posts')
        console.log(posts);
        return thunkAPI.fulfillWithValue(posts);
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('some error')
        }
    }
)
export const postSlice = createSlice({
    name: "postSlice",
    initialState: initPostSlice,
    reducers: {},
    extraReducers: builder => builder
        .addCase(loadPost.fulfilled, (state,action: PayloadAction<IPost[]>) => {
            state.posts = action.payload
        })
        .addCase(loadPost.rejected, (state,action) => {
            console.log(state);
            console.log(action);
        })
})

export const postSliceActions = {
    ...postSlice.actions, loadPost
}