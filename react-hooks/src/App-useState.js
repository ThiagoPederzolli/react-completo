import React, { useState } from 'react';

const App = () => {
  const [ativo, setAtivo] = useState(true);
  const [dados, setDados] = useState({nome: 'Thiago', idade: 30});
  function handleClick() {
    setAtivo(!ativo);
    setDados({...dados, faculdade: 'Possui Faculdade'});
  }
  return (
    <div>
      <p>{dados.nome}</p>
      <p>{dados.idade}</p>
      <p>{dados.faculdade}</p>
      <button onClick={handleClick}>{ativo ? 'Ativo' : 'Não está ativo!'}</button>
    </div>
  );
}

export default App;