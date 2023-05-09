let precoEtanol = 5.79;
let precoGasolina = 6.66;
let escolha = 1;
let gastoMedioPorKm = 10;
let distanciaPorKm = 100;

console.log(escolha)
if (escolha === 1) {
    gastoMedioPorKm = (distanciaPorKm / gastoMedioPorKm)
    escolha = (gastoMedioPorKm * precoGasolina)
    console.log("Total da viagem é:", escolha.toFixed(2));
} else if (escolha === 2) {
    gastoMedioPorKm = (distanciaPorKm / gastoMedioPorKm)
    escolha = (gastoMedioPorKm * precoEtanol)
    console.log("Total da viagem é:", escolha.toFixed(2));
}
// }else {
//     console.log("Opção Inválida");
// }

