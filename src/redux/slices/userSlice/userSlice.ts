import {createSlice} from "@reduxjs/toolkit";
import type {IUser} from "../../../model/IUser.ts";

type userSliceType = {
    users: IUser[]
}
export const initialState: userSliceType = {
    users: [],
}

export const userSlice = createSlice({
    name: "userSlice",
    initialState: initialState,
    reducers: {}
})