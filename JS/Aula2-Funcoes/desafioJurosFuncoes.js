function aplicarDesconto(valor,desconto){
    return(valor-(valor*(desconto)/100));
}
function aplicarAcrecimo(valorAcres,Acrecimo){
    return (valorAcres+(valorAcres*Acrecimo)/100)
}

    const valorProd = 100;
    const opcaoDePgt=4;
    if (opcaoDePgt ===1){
        console.log(aplicarDesconto(valorProd,10))
    }else if(opcaoDePgt===2){
        console.log(aplicarDesconto(valorProd,15))
    }else if(opcaoDePgt===3){
        console.log(aplicarDesconto(valorProd,0))
    }else if(opcaoDePgt===4){
        console.log(aplicarAcrecimo(valorProd,10))
    }else{
        console.log("Opção inválida!");
    }
