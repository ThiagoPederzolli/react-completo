import React from 'react'
import Produto from './Produto';

function Produtos() {
  const produtos = [
    { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },   
    { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
  ];

  return (
    <div>
      <h1 style={{color: 'green'}}>Produtos</h1>
      {produtos.map(produto => (<Produto produto={produto}/>))}    
    </div>
  )
}

export default Produtos
