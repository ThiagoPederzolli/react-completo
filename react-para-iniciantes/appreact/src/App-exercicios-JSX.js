import React from 'react';

// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

const App = () => {
  const dadosLuana = luana;
  const dadosMario = mario;
  const totalMario = dadosMario.compras
    .map(compra => +compra.preco.replace('R$ ', ''))
    .reduce((total, atual) => total + atual);
  const totalLuana = dadosLuana.compras
    .map(compra => +compra.preco.replace('R$ ', ''))
    .reduce((total, atual) => total + atual);
  const ativo = {
    color: 'green',
  };
  const inativo = {
    color: 'red',
  };
  return (
    <div>
      <h1>Situações:</h1>
      <div>
        <h2 style={dadosLuana.ativa ? ativo : inativo}>{dadosLuana.cliente}</h2>
        {totalLuana > 10000 ? 'Valor maior que 10k' : ''}
      </div>
      <div>
        <h2 style={dadosMario.ativa ? ativo : inativo}>{dadosMario.cliente}</h2>
        {totalMario > 10000 ? 'Valor maior que 10k' : ''}
      </div>
    </div>
  );
};

export default App;
