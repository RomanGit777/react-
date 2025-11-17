import type {IComment} from "../../models/IComment.ts";
import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {getAll} from "../../service/api.service.ts";

type CommentSliceType = {
    comments: IComment[];
}
const initCommentSlice: CommentSliceType = {
    comments: []
}
export const loadComment = createAsyncThunk(
    'commentSlice/loadComment',
    async (_, thunkAPI) => {
        try {
            const comments = await getAll<IComment[]>('/comments')
            console.log(comments);
            return thunkAPI.fulfillWithValue(comments)
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('some error')
        }
    }
)
export const commentSlice = createSlice({
    name: "commentSlice",
    initialState: initCommentSlice,
    reducers: {},
    extraReducers: builder => builder
        .addCase(loadComment.fulfilled, (state,action: PayloadAction<IComment[]>) => {
            state.comments = action.payload
        })
        .addCase(loadComment.rejected, (state,action) => {
            console.log(state);
            console.log(action);
        })
})

export const commentSliceActions = {
    ...commentSlice.actions, loadComment
}