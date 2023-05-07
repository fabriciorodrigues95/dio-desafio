// usando variavel boolean
// const camisetaeAzul = true;
// const camisetaLemaoAzul = false;

//Boleano - condicional exemplo 1
const verificacao = 3;
const NumeroPar = (verificacao % 2) === 0;
// Entendendo os sinais de "=" ===> um = significa atribuição, dois igual == significa comparação seja numero com string ou outros tipos sem se preocupar com o tipo da variável "POUCO USADO", três iguais === é usado para comparação do mesmo tipo de variável, isso evita erros "MAIS RECOMENDADO DE SE USAR" 
 console.log(NumeroPar); 

// Condicional - exemplo 2
const numero = 3;
const eNumeroPar = numero % 2;/* como é um estado de booleana fica -> cont isEnumeroPar */
if (eNumeroPar == 0){
    console.log("É par")
}else {
    console.log("É impar");
}

//Outro exemplo
const n1 = 0;
// const numeroDivPor5 = (n1 % 5)===0;

// if (n1 === 0) {
// Por outro jeito 
if (n1 % 5 === 0){/* Se a condição for muito grande faça igual o que está na variavel const numeroDivPor5 */
    console.log("Numero Invalido", n1);
}else if (numeroDivPor5){
    console.log("SIM")
}else{
    console.log("NAO");
}
