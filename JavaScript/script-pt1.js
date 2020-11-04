const menu = {
  seletor: 'principal',
};

console.log(menu.seletor.toUpperCase());

// function
function upperName(name) {
  return name.toUpperCase();
}

// expressão function
// precisa ser criada antes de ser acessada.
const newUpperName = function(name) {
  return name.toUpperCase();
};

// arrow function
// mantem o this do pai
// é possível deixar mais curta
const lowerName = name => name.toLowerCase();

console.log(upperName('thiago'));
console.log(newUpperName('silva'));
console.log(lowerName('THIAGO'));

function handleMouse({ clientX, clientY }) {
  console.log(clientX, clientY);
}

document.addEventListener('click', handleMouse);

const frutas = ['banana', 'uva'];
const [fruta1, fruta2] = frutas;
console.log(fruta1, fruta2);

function showList(empresa, ...clientes) {
  clientes.forEach(cliente => {
    console.log(cliente, empresa);
  });
}

showList('Google', 'André', 'Rafael', 'Thiago', 'Pedro', 'Osvaldo');

const numeros = [1, 32, 432, 35252, 42, 8, 98, 876, 657];

console.log(Math.max(...numeros));

const numeros2 = [...numeros, 3, 53, 87, 654, 876876, 53, 543];

const carro = {
  cor: 'Azul',
  portas: 4,
};

const carro2 = { ...carro, ano: 2020 };

console.log(carro);
console.log(carro2);
