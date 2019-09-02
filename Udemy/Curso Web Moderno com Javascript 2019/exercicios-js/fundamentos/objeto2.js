console.log(typeof Object); //função
console.log(typeof new Object); //instanciando um objeto


const Cliente = function(){}

console.log(typeof Cliente);
console.log(typeof new Cliente);

class Produto {} // ES 2015 {ES6}
console.log(typeof Produto);
console.log(typeof new Produto());