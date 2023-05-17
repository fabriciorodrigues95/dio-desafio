//Cálculo de IMC
const peso = 140;
const altura = 1.75;
const imc = peso/(altura * altura);
//Aqui poderia usar uma biblioteca --> Math.pow(altura,2)
console.log(imc);
if (imc < 18.5){
    console.log("Abaixo do peso");
}else if (imc >= 18.5 && imc < 25){
    console.log('Peso nomral');
}else if (imc >=25  && imc < 30){
    console.log('acima do peso');
}else if (imc >= 30 && imc < 40){
    console.log('Obeso');
}else {
    console.log('Obesidade grave');
}