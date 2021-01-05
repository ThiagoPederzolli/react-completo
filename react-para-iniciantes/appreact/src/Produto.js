import React from 'react'

function Produto({produto}) {
  const { nome, propriedades } = produto;
  return (
    <div style={{border: '2px solid black', margin: '1rem 0'}}>
      <h1>{nome}</h1>
      <ul>{propriedades.map(propriedade => (
        <li>{propriedade}</li>
      ))}</ul>
    </div>
  )
}

export default Produto
