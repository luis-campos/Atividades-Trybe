function menorValor(teste){
    let verifica = 0;
    let menor = 0;
    for(let indice in teste){
        if(teste[indice] < verifica){
            verifica = teste[indice];
            menor = indice;
        }
    }
    console.log(menor);
    return menor;
}

let array = [2, 4, 6, 7, 10, 0, -3];

menorValor(array);