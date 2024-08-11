
import { createSlice } from "@reduxjs/toolkit";
import { ordered, restocked } from "../icecream/iceCream.js";


// initialstate
// create a slice
// slice have name, initial state, reducers
// export 

const initialState = {
    numOfCakes :10
}

const cakeSlice = createSlice({
    name:"cake",
    initialState,
    reducers:{
    increase : (state, action)=>{
        state.numOfCakes++
        },
     decrease:(state,action)=>{
        state.numOfCakes--
        }
    },
   
})

// export actions, reducer
export const {increase, decrease} = cakeSlice.actions;
export default cakeSlice.reducer


// configurestore combines reducers creates a store





