function verificaPalindrome(frase){
    for (let indice = 0; indice < frase.length / 2; indice+=1){
        if (frase[indice] != frase[frase.length - indice - 1]) {
            console.log('false');
            
            return false;
        }
        
        console.log('true');
        return true;
    }
}

let palavra = 'arara';
verificaPalindrome(palavra);