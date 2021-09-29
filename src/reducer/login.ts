import { Reducer } from 'redux';

export interface  Conta
{
    count : number
}

//https://api.themoviedb.org/3/search/movie?api_key=ce23a65205981c6edc937bf8b7a90a72&language=it-IT&page=1&query=Fury


export const initialState = { count: 0};

export type ACTIONTYPE =
    | { type: "increment"; payload: number }
    | { type: "decrement"; payload: string };

export const loginReducer:Reducer<Conta,ACTIONTYPE> = (state : Conta =  initialState, action: ACTIONTYPE) => {
    switch (action.type) {
        case "increment":
            return {count: state.count + action.payload};
        case "decrement":
            return {count: state.count - Number(action.payload)};
        default:
            return state;
    }
}

