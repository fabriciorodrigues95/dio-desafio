function calcularImc(peso,altura){
    return peso / (altura * altura);
}
function classificarImc(imc){
    if (imc < 18.5){
    return ("Abaixo do peso");
    }else if (imc >= 18.5 && imc < 25){
        return ('Peso nomral');
    }else if (imc >=25  && imc < 30){
        return ('acima do peso');
    }else if (imc >= 30 && imc < 40){
        return ('Obeso');
    }else {
        return ('Obesidade grave');
    }
}
(function /* main -> Não preciso do nome -> chamado função não nomeada, mas só vai funcionar internamente, e não global */ (){
    const peso = 75;
    const altura = 1.75;
    const imc = calcularImc(peso, altura);
    console.log(imc);
    console.log(classificarImc(imc));
}) ();

// main(); --> Não precisso chamar ela por ter invocado ();

// Exemplo
// main ();->> Aqui vai da erro porque só funciona dentro dos () esta função por ser sem nome;