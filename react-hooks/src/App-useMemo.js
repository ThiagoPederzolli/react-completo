import React, { useMemo, useState } from 'react';

function operacaoLenta() {
  let c;
  for (let i = 0; i < 100000000; i++) {
    c = i + i / 10;
  }
  return c;
}

function App() {
  const [contar, setContar] = useState(0);
  // const valor = useMemo(() => {
  //   const localItem = window.localStorage.getItem('produto');
  //   console.log('aconteceu o memo');
  //   return localItem;
  // }, []);
  // const t1 = performance.now();
  // const valor = operacaoLenta();
  // // console.log(valor);
  // console.log(performance.now() - t1);
  // // 463.20999999989
  // // 449.80500000019674

  // const t1 = performance.now();
  // const valor = useMemo(() => operacaoLenta(), []);
  // console.log(performance.now() - t1);
  // 0.17499999921710696
  // 0.014999999621068127

  

  return (
    <div>
      Olá!
      <button onClick={() => setContar(contar + 1)}>Contar {contar}</button>
    </div>
  )
}

export default App