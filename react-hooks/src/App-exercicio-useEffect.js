import React, { useEffect, useState } from 'react';
import Produto from './Produto-exercicio-useState';

function App() {
  const [produto, setProduto] = useState({});
  const [carregando, setCarregando] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const produtoFav = window.localStorage.getItem('produto');
      const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${produtoFav}`);
      const produto = await response.json();
      setProduto(produto);
    }
    fetchData();
  }, []);

  useEffect(() => {
    window.localStorage.setItem('produto', produto.nome);
  },[produto]);

  async function handleClick({target}) {
    setCarregando(true);
    const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${target.innerText}`);
    const produto = await response.json();
    setProduto(produto);
    
    setCarregando(false);
  }

  return (
    <div>
      <button type="button" onClick={handleClick}>tablet</button>
      <button type="button" onClick={handleClick}>smartphone</button>
      <button type="button" onClick={handleClick}>notebook</button>
      {carregando && <h1>Carregando...</h1>}
      {!carregando && <Produto produto={produto} />}
    </div>
  )
}

export default App;