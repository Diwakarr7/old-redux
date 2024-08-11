// action creators, returns plain js obj, 
// reducers , combine reducers, create store which accepts rootreducer, applymiddleware
// dispatch, getstate

// const { createStore } = require("redux");
import {combineReducers, createStore, applyMiddleware} from "redux"
import { thunk } from "redux-thunk";
import logger from 'redux-logger'

const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

// action creators
const increase = (qty=1)=>({type:INCREASE, payload:qty})
const decrease = ()=>({type:DECREASE})

// initial state
const initialState = {
    count: 1
}

// reducers 
const counterReducer = (state=initialState, action)=>{
    switch(action.type){
        case "INCREASE":
            return{...state, count:state.count+ action.payload}
         case "DECREASE":
            return{...state, count:state.count-1}
        default :
        return state
            
    }
}



// 
// comnines the multiple reducers
const rootReducer  = combineReducers({counter : counterReducer})

// we can apply middlewares and rootreducer in createstore
const store = createStore(rootReducer,applyMiddleware(thunk))
console.log(store.dispatch(increase()))
console.log(store.getState())
console.log(store.dispatch(increase()))
console.log(store.getState())
console.log(store.dispatch(increase()))
console.log(store.getState())
console.log(store.dispatch(decrease()))
console.log(store.getState())
console.log(store.dispatch(decrease()))
console.log(store.getState())
console.log(store.dispatch(decrease()))
console.log(store.getState())
console.log(store.dispatch(increase(10)))
console.log(store.getState())
console.log(store.dispatch(increase()))
console.log(store.getState())
console.log(store.dispatch(increase()))
console.log(store.getState())


const unsub = store.subscribe(()=>{
    console.log("currrent state  " + store.getState() )
})

unsub();
