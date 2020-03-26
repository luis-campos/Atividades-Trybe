function nomeMaior(nome){
    let verifica = [];
    let cont;
    let maior = 0;
    let nMaior;
    
    for(let indice in nome){        
        verifica[0] = nome[indice];
        cont = 0;
        for(let i in verifica[0]){
            cont+=1;
        }
        if(maior < cont){
            maior = cont;
            nMaior = verifica;  
        }
    }
    console.log(nMaior);
    
    return nMaior;
}

let array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

nomeMaior(array);