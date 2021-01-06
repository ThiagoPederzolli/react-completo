import React, { useEffect } from 'react'
import useFetch from './useFetch';
import useLocalStorage from './useLocalStorage';

function App() {
  const [produto, setProduto] = useLocalStorage('produto', '');
  const { request, data, loading, error } = useFetch();

  function handleClick({target}) {
    setProduto(target.innerText);
  }

  useEffect(() => {
    async function fetchData() {
      const {response, json} = await request('https://ranekapi.origamid.dev/json/api/produto/');
    }
    fetchData();
  }, [])

  if (error) return <p>{error}</p>
  if (loading) return <h1>Carregando...</h1>
  if (data)
  return (
    <div>
      Olá!
      <button type="button" onClick={handleClick}>notebook</button>
      <button type="button" onClick={handleClick}>smartphone</button>
      {data.map((produto) => <div key={produto.id}> <h1>{produto.nome}</h1> </div>)}
    </div>
  )
  else return null;
}

export default App;
