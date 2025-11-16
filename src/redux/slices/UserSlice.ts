import type {IUser} from "../../models/IUser.ts";
import {createSlice} from "@reduxjs/toolkit";

type UserSliceType = {
    users: IUser[];
}
const initUserSlice: UserSliceType = {
    users: []
}
export const userSlice = createSlice({
    name: "userSlice",
    initialState: initUserSlice,
    reducers: {},
    extraReducers: builder => builder,
})