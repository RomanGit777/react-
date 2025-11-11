import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit"
import type {IPost} from "../../../model/IPost.ts";
import {postService} from "../../../services/api.services.ts";

type postsSliceType = {
    posts: IPost[];
}

export const initialState: postsSliceType = {
    posts: []
}

export const loadPosts = createAsyncThunk(
    'postSlice/loadPosts',
    async (_, thunkAPI) => {
        try {
            const posts = await postService.loadPost();
            return thunkAPI.fulfillWithValue(posts);
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    }
)
export const postSlice = createSlice({
    name: "postSlice",
    initialState: initialState,
    reducers: {},
    extraReducers: builder =>
        builder.addCase(loadPosts.fulfilled, (state, action: PayloadAction<IPost[]>) => {
            state.posts = action.payload
        }).addCase(loadPosts.rejected, (state, action) => {
            console.log(state);
            console.log(action);
        })
})

export const postSliceActions = {
    ...postSlice.actions, loadPosts
}