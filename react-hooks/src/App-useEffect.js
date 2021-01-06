import React, { useEffect, useState } from 'react'
import Produto from './Produto-useEffect';

function App() {
  const [ativo, setAtivo] = useState(false)
  return (
    <div>
      Olá!
      {ativo && <Produto />}
      <button type="button" onClick={() => setAtivo(!ativo)}>Modal</button>
    </div>
  )
}

export default App;


// const [contar, setContar] = useState(0);
// useEffect(() => {
//   console.log('executou');
// }, []);
// useEffect(() => {
//   document.title = `Total ${contar}`
// }, [contar]);
// return (
//   <div>
//     Olá!
//     <button type="button" onClick={() => setContar(contar + 1)}>{contar}</button>
//   </div>
// )



// const [contar, setContar] = useState(0);
//   const [dados, setDados] = useState({});

//   useEffect(() => {
//     fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')
//     .then(response => response.json())
//     .then(json => setDados(json))
//   }, []);

//   return (
//     <div>
//       Olá!
//       {dados && (
//         <div>
//           <h1>{dados.nome}</h1>
//           <p>{dados.preco * contar}</p>
//         </div>
//       )}
//      <button type="button" onClick={() => setContar(contar + 1)}>{contar}</button>
//     </div>
//   )