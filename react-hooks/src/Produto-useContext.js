import React, { useContext } from 'react'
import { GlobalContext } from './GlobalContext';

function Produto() {
  const global = useContext(GlobalContext);

  // function handleClick() {
  //   global.setContar((contar) => contar + 1)
  // }
  return (
    <div>
      <p>{global.nome}</p>
      <p>{global.contar}</p>
      <button type="button" onClick={() => global.adicionarUm()}>Contador 1 em 1</button>
      <button type="button" onClick={() => global.adicionarDois()}>Contador 2 em 2</button>
    </div>
  )
}

export default Produto;
