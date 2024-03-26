import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userName:'',
    id:0,
    authState:false
}

const UserSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        logingSuccess:(state,action) =>{
            state.authState = true
            state.userName = action.payload.userName
            state.id = action.payload.id
        },

        logingFail:(state,action) =>{
            state.authState = false
            state.userName = ''
            state.id = 0
        }
    }
})

export const {logingSuccess,logingFail} = UserSlice.actions;
export default UserSlice.reducer

