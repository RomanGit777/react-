import type {IUserModel} from "../../../models/IUserModel.ts";
import {createAsyncThunk, createSlice, isFulfilled, type PayloadAction} from "@reduxjs/toolkit";

type userSliceType = {
    users: IUserModel[];
    user: IUserModel | null;
    loadState: boolean; // It characterizes the state of downloading data from the API.
}

const initialState: userSliceType = {users: [], user: null, loadState: false}; // if data loaded, it will change to true

const loadUsers = createAsyncThunk( // call the async func here
    'userSlice/loadUsers', // name
    async (_, thunkApi) => {
       try {
           const users = await fetch('https://jsonplaceholder.typicode.com/users')
               .then(res => res.json())
           thunkApi.dispatch(userSliceActions.changeLoadState(true))

           return thunkApi.fulfillWithValue(users); // return if fulfill
           //  throw new Error ();
       } catch (e){
           console.log(e)
           return thunkApi.rejectWithValue('some error') // return if rejected
       }
    }
)
const loadUser = createAsyncThunk(
    'userSlice/loadUser', // name
    async (id: string, thunkApi) => { // add id
        try {
            const user = await fetch('https://jsonplaceholder.typicode.com/users/' + id) // add id here
                .then(res => res.json())
            thunkApi.dispatch(userSliceActions.changeLoadState(true))


            return thunkApi.fulfillWithValue(user);
            //  throw new Error ();
        } catch (e) {
            console.log(e)
            return thunkApi.rejectWithValue('some error')
        }
    }
)

export const userSlice = createSlice({
    name: "userSlice", // name of our slice
    initialState: initialState,
    reducers: {
        changeLoadState: (state,action: PayloadAction<boolean>) => {
             state.loadState = action.payload;
}
    }, // we moved functions from here, because it can't be async here
    extraReducers: builder =>
        builder.addCase(loadUsers.fulfilled,(state,action: PayloadAction<IUserModel[]>) => {
            state.users = action.payload
        }) // do this if request fulfilled
            .addCase(loadUsers.rejected,(state, action) => {
                console.log(action);
                console.log(state);
            }) .addCase(loadUser.fulfilled,(state, action: PayloadAction<IUserModel>) => {
                state.user = action.payload;
            })
            .addMatcher(isFulfilled(loadUser,loadUsers), (state) => { // when methods fulfilled, change loadState to
                // true
                state.loadState = true;
            } )

    });
export const userSliceActions = {
    ...userSlice.actions, loadUsers, loadUser
} // here everything what stores slice and we call actions, func
