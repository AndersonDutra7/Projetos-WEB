import React from 'react';
import ReactDOM from 'react-dom';

const nome = "Anderson";

ReactDOM.render(
  <div>
    <h1 className="titulo">Olá Mundo! ...</h1>
    <p>Esse é meu primeiro React.</p>
    <p>Meu nome é {nome}.</p>
    <p>Um número qualquer: {Math.random() * 10}</p>
  </div>,
    document.getElementById('root')
);