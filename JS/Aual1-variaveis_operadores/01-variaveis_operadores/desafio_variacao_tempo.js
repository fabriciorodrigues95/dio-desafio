let precoCombustivel = 5.8;
let kmL = 12;
let distanciakm = 20;

distanciakm = distanciakm / kmL;

precoCombustivel = distanciakm * precoCombustivel;

console.log("O valor a ser gasto é:", precoCombustivel.toFixed(2));/* toFixed é usado para arredondar o valor  */

const precoComb = 6.14;
const km_l = 12;
const distPorKm = 150;

const valorPorKm = distPorKm / km_l;
const valorGasto = valorPorKm * precoComb;

console.log("O valor a ser pago é:", valorGasto.toFixed(2));/* tofixed é usado para arrendondar o valor  */
