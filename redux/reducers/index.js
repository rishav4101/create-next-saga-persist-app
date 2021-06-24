import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";
import countriesReducer from "./countriesReducer"


const combinedReducers = combineReducers({
    countriesReducer
})  

export default function reducer(state, action) {
    switch(action.type) {
        
        case HYDRATE:
            const nextState = {
            ...state,
            ...action.payload,
            }
            if (state.countriesReducer) nextState.countriesReducer = state.countriesReducer // Preserve state during client side navigations
            return nextState
        default: 
            return combinedReducers(state, action);
    }
}