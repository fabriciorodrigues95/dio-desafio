let valorPassagem = 6.00;
let mes = 30;
let folga = 3;
let diasTrabalhados = 15;
let qtdPassagens = 4;
if  (mes === 31 || mes == 30) {
    diasTrabalhados = (mes - diasTrabalhados-folga)
   // console.log(":", diasTrabalhados);
   qtdPassagens = diasTrabalhados * valorPassagem * qtdPassagens;
// }else {
//     mes = 30;
//      diasTrabalhados = (mes - diasTrabalhados - folga)
//     qtdPassagens = diasTrabalhados * valorPassagem * qtdPassagens;
}
console.log("Valor que precisa recarregar:", qtdPassagens);

 //var entrada=console.log(prompt('Input'));
 var passagensUsadas = 1;
 let passagem = 6;
 var qtdDeDias =  4;
 var qtdSemanas = 4;
 passagensUsadas = passagem * passagensUsadas ;
 //12 
 qtdDeDias = qtdDeDias * passagensUsadas;
 //5 * 12 = 60;
 qtdSemanas = qtdSemanas * qtdDeDias;
  console.log("Valor que precisa recarregar:",qtdSemanas);
  // 4 * 60 = 240