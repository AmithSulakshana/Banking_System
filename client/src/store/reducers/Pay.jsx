import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    account:localStorage.getItem("account")
    ? JSON.parse(localStorage.getItem("account"))
    : [],
    amount:localStorage.getItem("amount")
    ? JSON.parse(localStorage.getItem("amount"))
    : [],
}

const PaySlice = createSlice({
    name:'pay',
    initialState,
    reducers:{
        payment:(state,action) =>{
           state.account = action.payload.account
           state.amount = action.payload.amount

           localStorage.setItem("account",JSON.stringify(state.account));
           localStorage.setItem("amount",JSON.stringify(state.amount))
        },

    }
})

export const {payment} = PaySlice.actions;
export default PaySlice.reducer

