function  sayMyName(name){
    console.log("Your name is: "  + name);
}
function quadrado(valor){
    return valor * valor;
}
sayMyName('Renan');
sayMyName('Fabricio');
//const quadradoDeDez = quadrado(10);
//console.log(quadradoDeDez);

//outra maneira
console.log(quadrado(10)+ quadrado(10));


//Exemplo da compra que tinha um acrécimo

function incrementarJuros(valor,percentualJuros){
    const valorDeAcrecimo = (percentualJuros/100)*valor;
    return valor+valorDeAcrecimo;
}

console.log(incrementarJuros(100,10));
console.log(incrementarJuros(100,15));
console.log(incrementarJuros(100,20));

//Agora por padrão vamos começar a trabalhar com a organização do código e como estaremos trabalhando com funções tudo passara por ela; 

//Aqui ficaram as funções secundarias
function calcularJuros(){

}
//Primeiro vai começar com a function main -> função principal;

function main(){
    console.log('Programa Principal');
    calcularJuros();
}
