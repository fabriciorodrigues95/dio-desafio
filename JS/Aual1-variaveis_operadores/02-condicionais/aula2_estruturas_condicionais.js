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
const eNumeroPar = numero % 2;
if (eNumeroPar == 0){
    console.log("É par")
}else {
    console.log("É impar");
}