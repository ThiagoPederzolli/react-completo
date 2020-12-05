import React from 'react';

const App = () => {
  // const handleClick = event => {
  //   console.log(event);
  // };
  const handleScroll = event => {
    console.log(event);
  };
  window.addEventListener('scroll', handleScroll);
  return (
    <div style={{ height: '200vh' }}>
      <button type="button" onClick={({ target }) => alert(target.innerText)}>
        Clique
      </button>
      <button onClick={({ target }) => target.classList.toggle('ativa')}>
        Ativar
      </button>
      {/* <button type="button"></button> */}
    </div>
  );
};

export default App;
