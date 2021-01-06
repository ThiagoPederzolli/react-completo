import React from 'react';

const App = () => {
  const ativo = false;

  return <button disabled={!ativo}>{ativo ? 'Ativo' : 'Não está ativo!'}</button>
}

export default App;


// O código abaixo incide num problema, porque a lógica de handleClick é algo interno que não força uma nova leitura do código que está no return, logo, mesmo o click mudando o valor de ativo, o return não processa essa informação e não gera nenhuma alteração na tela do usuário.
// import React from 'react';

// const App = () => {
//   let ativo = true;

//   function handleClick() {
//     ativo = !ativo;
//     console.log(ativo);
//   }

//   return <button onClick={handleClick}>{ativo ? 'Ativo' : 'Não está ativo!'}</button>
// }

// export default App;