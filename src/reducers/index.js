import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk";
import tokenReducer from "./tokenReducer"
import userReducer from "./userReducer"


const rootReducer = combineReducers({
    token: tokenReducer,
    user: userReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))