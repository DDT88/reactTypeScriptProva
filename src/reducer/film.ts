import {Dispatch, Reducer} from 'redux';
import {ListFilm} from '../model/film';


export const initialState:ListFilm = {
    results: []
}

export type ACTIONTYPE =  { type:"READ_FILM";paylod:ListFilm};


export const ReadFilmAction = (dispatch:Dispatch<ACTIONTYPE>) =>  {
    readFilm().then((data) => {
            console.log("ReadFilmAction",data);
            dispatch({ type: "READ_FILM", paylod:data });

        });

};


async function  readFilm(){
    const  url = "https://api.themoviedb.org/3/search/movie?api_key=ce23a65205981c6edc937bf8b7a90a72&language=it-IT&page=1&query=Fury";
    const response = await fetch(url, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url

    });
    let ris = response.json();
    return ris; // parses JSON response into native JavaScript objects
}

export const filmReducer:Reducer<ListFilm,ACTIONTYPE> = (state:ListFilm = initialState,action:ACTIONTYPE) =>{

    switch (action.type) {

        case  "READ_FILM":

            console.log("ddd" , action.paylod);
            return {
                ...state,
                results:action.paylod.results
            }

        default:
            return state;

    }


}




