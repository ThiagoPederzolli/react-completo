import React from 'react'

function Produto({produto}) {
  const { nome, preco} = produto;
  return (
    <div>
      <h1>{nome}</h1>
      <p>{preco}</p>
    </div>
  )
}

export default Produto
