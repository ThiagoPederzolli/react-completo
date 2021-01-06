import React from 'react'

function Produto({produto}) {
  const { nome, preco, descricao} = produto;
  return (
    <div>
      <h1>{nome}</h1>
      <p>{preco}</p>
      <p>{descricao}</p>
    </div>
  )
}

export default Produto
