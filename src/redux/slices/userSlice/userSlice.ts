import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IUser} from "../../../model/IUser.ts";

type userSliceType = {
    users: IUser[]
}
export const initialState: userSliceType = {
    users: [],
}

export const loadUsers = createAsyncThunk(
    "userSlice/loadUsers",
    async (_,thunkApi) => {
        try {
            const users = await fetch('https://jsonplaceholder.typicode.com/users')
                .then(res => res.json())
                return thunkApi.fulfillWithValue(users);
        } catch (e) {
            return thunkApi.rejectWithValue(e);
        }
}
)

export const userSlice = createSlice({
    name: "userSlice",
    initialState: initialState,
    reducers: {},
    extraReducers: builder =>
        builder.addCase(loadUsers.fulfilled,(state,action:PayloadAction<IUser[]>) => {
            state.users = action.payload
        }).addCase(loadUsers.rejected, (state,action) => {
            console.log(state);
            console.log(action);
        })
})

export const userSliceActions = {
    ...userSlice.actions, loadUsers
}