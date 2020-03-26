function maiorValor(teste){
    let verifica = 0;
    let maior = 0;
    for(let indice in teste){
        if(teste[indice] > verifica){
            verifica = teste[indice];
            maior = indice;
        }
    }
    console.log(maior);
    return maior;
}

let array = [2, 3, 6, 7, 10, 1];

maiorValor(array);