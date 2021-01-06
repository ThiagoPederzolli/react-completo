import React, { createContext, useEffect, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalStorage = ({children}) => {
  const [produto, setProduto] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const produtoFav = window.localStorage.getItem('produto');
      const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${produtoFav}`);
      const produto = await response.json();
      setProduto(produto);
    }
    fetchData();
  }, []);

  function limparDados() {
    setProduto('')
  }
  return <GlobalContext.Provider value={{ produto, setProduto, limparDados}}>{children}</GlobalContext.Provider>
}

