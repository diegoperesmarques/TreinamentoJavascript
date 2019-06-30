const escola = "coder";

/*
charAt - função para retornar um caractere em uma posição
Quando não acha o caractere fica em branco
*/
console.log(escola.charAt(4)); 
console.log(escola.charAt(5));

/*
charCodeAt - função para retornar o valor do caractere
na tabela ASCII
*/
console.log(escola.charCodeAt(3));

/*
indexOf - localizar o índice de um determinado digito
*/
console.log(escola.indexOf("e"));

/*
substring - função para exibir apenas uma parte
da string
*/
console.log(escola.substring(1));
console.log(escola.substring(0, 3));

/*
concat - função para concatenar strings
*/
console.log("Escola ".concat(escola).concat("!"));

/*
replace - substituir caracteres na string
*/
console.log(escola.replace("e", 3));


/*
Split - quebrar um string em um Array
*/
console.log("Ana,Maria,Pedro".split(","));