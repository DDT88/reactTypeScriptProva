import React from 'react';
import './App.css';
import Title from './components/Title';
import Login from './components/Login';
import {ListaFilm} from "./components/Film";

function App() {
  return (
    <div className="App">



        <Title title='Titolo' subtitle='SottoTitolo' ></Title>
        <Login></Login>


        <ListaFilm></ListaFilm>



    </div>
  );
}

export default App;
