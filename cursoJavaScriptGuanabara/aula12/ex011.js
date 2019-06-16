var idade = 70;
console.log(`Você tem ${idade} anos.`);
if (idade < 18) {
    console.log("Menor de idade!");
} else if (idade < 18 || idade > 65){
        console.log("Voto opcional!");
} else {
    console.log("Voto obrigatório!");
}