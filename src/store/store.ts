//import {createStore } from 'redux'
import { loginReducer } from  '../reducer/login';
//export const store = createStore(loginReducer);

import { configureStore , combineReducers } from '@reduxjs/toolkit'
import {filmReducer} from "../reducer/film";
// ...
const  rootReducer  =  combineReducers({
    login : loginReducer,
    film: filmReducer
});


export const store = configureStore({
   reducer:rootReducer
});

export type  RootState =  ReturnType<typeof rootReducer>