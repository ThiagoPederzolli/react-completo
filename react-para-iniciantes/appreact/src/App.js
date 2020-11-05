// const App = () => {
//   const nome = 'André';
//   const desde = Math.random();
//   const ativo = true;
//   const titulo = <h1>Esse é um título</h1>;
//   return (
//     <div>
//       {titulo}
//       <a
//         className={ativo ? 'ativo' : 'inativo'}
//         href="https://origamid.com"
//         title="isso é um site"
//       >
//         Origamid, desenvolvida por {nome}, desde {desde * 2020}
//       </a>
//     </div>
//   );
// };
const App = () => {
  function meuNome() {
    return 'André';
  }

  function quadrado(x) {
    return x * x;
  }

  const carro = {
    rodas: 4,
    marca: 'Ford',
  };

  return (
    <div>
      <p>{'MINHA EMPRESA'.toLowerCase()}</p>
      <p>{30 * 2}</p>
      <p>{true}</p>
      <p>{undefined}</p>
      <p>{(() => 'Função Executada')()}</p>
      <p>{meuNome()}</p>
      <p>{quadrado(2)}</p>
      <p>{quadrado(2) === 4 ? 'Fórmula correta' : 'Fórmula incorreta'}</p>
      <p>{quadrado(2) === 4 && 'Fórmula correta'}</p>
      <p>{Date.now()}</p>
      <p>{new Date().getFullYear()}</p>
      <p>
        Marca: {carro.marca}, Rodas: {carro.rodas}
      </p>
    </div>
  );
};
export default App;
