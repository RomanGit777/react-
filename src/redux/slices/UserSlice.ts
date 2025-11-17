import type {IUser} from "../../models/IUser.ts";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getAll} from "../../service/api.service.ts";

type UserSliceType = {
    users: IUser[];
}
const initUserSlice: UserSliceType = {
    users: []
}

export const loadUser = createAsyncThunk(
    "userSlice/loadUSer",
    async (_, thunkApi) => {
        try {
        const users = await getAll<IUser[]>('/users')
        console.log(users)
        return thunkApi.fulfillWithValue(users)
        } catch (e) {
            console.log(e)
            return thunkApi.rejectWithValue(users)
        }
}
)
export const userSlice = createSlice({
    name: "userSlice",
    initialState: initUserSlice,
    reducers: {},
    extraReducers: builder => builder,
})