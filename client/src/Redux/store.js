import { legacy_createStore, applyMiddleware } from "redux";
import { reducer as AppReducer } from "./reducer";
import thunk from "redux-thunk";


export const Store = legacy_createStore(AppReducer, applyMiddleware(thunk));
