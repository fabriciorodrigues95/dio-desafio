function verificarIdade(idade){
    if (idade >= 18){
        console.log("Maior de idade" );
    }else{
        console.log("Menor de idade");
    }
}

function main(){
    const idade = 20;
    verificarIdade(idade);
}
main();

// Outra lógica
verificarIdade(11);