// import React from 'react';
// import { createRoot } from 'react-dom';

// const nome = "Anderson";

// createRoot(
//   <div>
//     <h1 className="titulo">Olá Mundo! ...</h1>
//     <p>Esse é meu primeiro React.</p>
//     <p>Meu nome é {nome}.</p>
//     <p>Um número qualquer: {Math.random() * 10}</p>
//   </div>,
//     document.getElementById('root')
// );

// import { createRoot } from 'react-dom/client';
// import Header from './Header.jsx';

// const nome = "Anderson";
// estilização inline
// const estilo = {color: "gray", backgroundColor : "aqua"};
// const foto = {img : "../imagens/gremio.jpg"}

// const root = createRoot(document.getElementById('root'));

// function App() {
//   return (
//     <div>
//       <Header></Header>
//       <h1 className="titulo">Olá Mundo! ...</h1>
//       <p style={estilo}>Esse é meu primeiro React.</p>
//       <p>Meu nome é {nome}.</p>
//       <p>Um número qualquer: {Math.random() * 10}</p>
//       <img src="../imagens/gremio2.PNG"></img>
//     </div>
//   );
// }

// root.render(<App />);

import React from "react";
import ReactDOM from "react";
import App from ".App.jsx";

ReactDOM.render(<App/>, document.getElementById("root")
);



