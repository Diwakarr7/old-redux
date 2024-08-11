
import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "./features/cake/cakeSlice.js"
import iceReducer from "./features/icecream/iceCream.js"

import reduxLogger from "redux-logger";
import { increase, decrease } from "./features/cake/cakeSlice.js";

const logger = reduxLogger.createLogger()

// import the reducer to combine
// also middlewares
// we can use that store to dispatch actions


// configurestore combines reducers creates a store also a middleware
const store = configureStore({
    reducer:{
        cake:cakeReducer,
        iceCream:iceReducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger) 
    

}) 

const unsub = store.subscribe(()=>{
    console.log("updated state ", store.getState());
})
// store.dispatch(decrease())
// store.dispatch(decrease())
// store.dispatch(decrease())
// unsub()
// below action wont work
store.dispatch(decrease())
store.dispatch(decrease())
store.dispatch(decrease())
// store.dispatch(increase())
// store.dispatch(increase())
// store.dispatch(increase())



export default store


