// fetch('https://ranekapi.origamid.dev/wp-json/api/produto')
//   .then(reponse => response.json())
//   .then(json => console.log(json));

async function fetchProdutos() {
  const url = 'https://ranekapi.origamid.dev/wp-json/api/produto';
  const response = await fetch(url);
  const json = await reponse.json();
  console.log(json);
}
// fetchProdutos();

const precos = [
  'Crédito',
  'R$ 200',
  'R$ 400',
  'Contas pagar',
  'R$ 300',
  'R$ 400',
  'Meus dados',
];

const precosFiltro = precos.filter(preco => preco.includes('R$'));

const precosNumeros = precosFiltro.map(preco => +preco.replace('R$ ', ''));

console.log(precosFiltro);
console.log(precosNumeros);

const grupoA = 100;
const grupoB = 300;
const vencedor =
  grupoA > grupoB
    ? console.log('Grupo A Venceu')
    : console.log('Grupo B Venceu');

const numeros = [2, 3, 4, 5, 6];
const total = numeros.filter(numero => numero > 4);
console.log(total);

const active = true;
const button = active && 'Botão está ativo';
console.log(button);
