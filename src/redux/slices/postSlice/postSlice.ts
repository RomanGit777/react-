import {createAsyncThunk, createSlice, isFulfilled, type PayloadAction} from "@reduxjs/toolkit";
import type {IPost} from "../../../models/IPost.ts";
import {postsService} from "../../../services/postsService.ts";

type postSliceType = {
   posts: IPost[],
   loadState: boolean
}
export const initialState: postSliceType = {posts: [], loadState: false};

const loadPosts = createAsyncThunk(
    'postSlice/loadPosts',
    async (_, thunkApi) => {
        try {
            const posts = await postsService.loadPosts()
            thunkApi.dispatch(postsSliceActions.changeLoadState(true))
            return thunkApi.fulfillWithValue(posts)
        } catch(e){
            console.log(e)
            return thunkApi.rejectWithValue('some error')
        }
    }
)

export const postSlice = createSlice({
    name: "postSlice",
    initialState: initialState,
    reducers: {
        changeLoadState: (state,action: PayloadAction<boolean>) => {
            state.loadState = action.payload;
        }
    },
    extraReducers: builder => builder.
    addCase(loadPosts.fulfilled,(state, action: PayloadAction<IPost[]>) => {
        state.posts = action.payload
    })
    .addCase(loadPosts.rejected,(state, action) => {
        console.log(state);
        console.log(action);
    })
        .addMatcher(isFulfilled(loadPosts), (state) => {
            state.loadState = true;
        })

})

export const postsSliceActions = {
    ...postSlice.actions ,loadPosts
}