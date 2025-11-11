import {createAsyncThunk, createSlice, isFulfilled, type PayloadAction} from "@reduxjs/toolkit";
import type {IUser} from "../../../model/IUser.ts";
import {userService} from "../../../services/api.services.ts";

type userSliceType = {
    users: IUser[],
    user: IUser | null,
    loadState: boolean
}
export const initialState: userSliceType = {
    users: [],
    user: null,
    loadState: false
}

export const loadUsers = createAsyncThunk(
    "userSlice/loadUsers",
    async (_,thunkApi) => {
        try {
           const users = await userService.loadUsers()
                return thunkApi.fulfillWithValue(users);
        } catch (e) {
            return thunkApi.rejectWithValue(e);
        }
}
)
export const loadUser = createAsyncThunk(
    "userSlice/loadUser",
    async (id:string, thunkApi) => {
        try {
           const user = await userService.loadUser(id)
                return thunkApi.fulfillWithValue(user);
        } catch (e) {
            return thunkApi.rejectWithValue(e);
        }
}
)

export const userSlice = createSlice({
    name: "userSlice",
    initialState: initialState,
    reducers: {
        loadState: (state, action: PayloadAction<boolean>) => {
            state.loadState = action.payload;
        }
    },
    extraReducers: builder =>
        builder.addCase(loadUsers.fulfilled,(state,action:PayloadAction<IUser[]>) => {
            state.users = action.payload
        }).addCase(loadUsers.rejected, (state,action) => {
            console.log(state);
            console.log(action);
        }).addCase(loadUser.fulfilled,(state,action:PayloadAction<IUser>) => {
            state.user = action.payload
        })
            .addMatcher(isFulfilled(loadUser,loadUsers), (state) => {
             state.loadState = true
            })
})

export const userSliceActions = {
    ...userSlice.actions, loadUsers, loadUser
}