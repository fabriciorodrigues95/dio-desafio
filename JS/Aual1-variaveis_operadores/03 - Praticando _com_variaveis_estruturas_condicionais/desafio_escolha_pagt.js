//valorProd
//1-se for a vista ou Debito = desconto de 10%
//2-Se for a vista no dinheiro ou pix = 15%
//3-se for parcelado em duas vezes = 0
//4-Se for acima de de duas parcela acrecenta = 10%

const valorProd = 100;
const opcaoDePgt=0;
let valorTotal;
if (opcaoDePgt ===1){
    valorTotal = valorProd-(valorProd*10)/100;
    console.log(valorTotal);
}else if(opcaoDePgt===2){
    valorTotal = valorProd-(valorProd*15)/100;
    console.log(valorTotal);
}else if(opcaoDePgt===3){
    valorTotal=valorProd;
    console.log(valorTotal);
}else if(opcaoDePgt===4) {
    valorTotal = valorProd+(valorProd*10)/100;
    console.log(valorTotal);
}else{
    console.log("Opção inválida!");
}
