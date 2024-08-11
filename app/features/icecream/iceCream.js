

import { createSlice } from "@reduxjs/toolkit";
import { decrease} from "../cake/cakeSlice.js";


// initialstate
// create a slice
// slice have name, initial state, reducers
// export 
// extra reducers >> when we want to respond to other slice dispatched actions


const initialState = {
    numOfIceCreams :20
}


const iceSlice = createSlice({
    name:"icecream",
    initialState,
    reducers:{
        ordered:(state)=>{
        state.numOfIceCreams--
        },
        restocked:(state)=>{
            state.numOfIceCreams++
        },
    },
    // it allows to respond to other slice types or actions 
    extraReducers:(builder)=>{
        builder.addCase(decrease, (state)=>{
            state.numOfIceCreams--
        })
    }
})

// export actions, reducer
export const {ordered, restocked} = iceSlice.actions;
export default iceSlice.reducer







