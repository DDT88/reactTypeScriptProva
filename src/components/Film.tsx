import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { ReadFilmAction} from "../reducer/film";
import {RootState} from "../store/store";
import {Film} from "../model/film";



export const ListaFilm = ()=>{

    const dispatch = useDispatch();

    useEffect( ()=>{
        ReadFilmAction(dispatch);
    },[dispatch])

    const lista = useSelector<RootState,Film[]>((state) => state.film.results);
    console.log(lista);

    return (

        <table className="table">
            <thead>
            <tr>
                <th><abbr title="id_file">ID</abbr></th>
                <th>original_title</th>
                <th><abbr title="title">titolo</abbr></th>
                <th><abbr title="vote_average">vote_average</abbr></th>
                <th><abbr title="vote_count">vote_count</abbr></th>
            </tr>
            </thead>

            <tbody>
            {
                lista.map((x)=>{
                    return (
                <tr key ={x.id}>
                    <td>{x.id}</td>
                    <td>{x.original_title}</td>
                    <td>{x.title}</td>
                    <td>{x.vote_average}</td>
                    <td>{x.vote_count}</td>
                </tr>
                    )

            })



            }
            </tbody>
        </table>
    );


}