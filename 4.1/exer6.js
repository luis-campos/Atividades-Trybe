function myFunction(){
    var nome = prompt("Digite o nome de uma peça de xadres");
    var peca = nome.toLowerCase();
 
    switch(peca){
        case 'rainha': document.getElementById("demo").innerHTML = "A Rainha se movimenta para todos os lados e por quantas casas quiser";
        break;
        
        case 'rei': document.getElementById("demo").innerHTML = "O Rei se movimenta para todos os lados, porém apenas uma casa de cada vez";
        break;

        case 'bispo': document.getElementById("demo").innerHTML = "O Bispo se movimenta na vertical por todo o tabuleiro";
        break;

        case 'cavalo': document.getElementById("demo").innerHTML = "O Cavalo se movimenta em 'L'";
        break;

        case 'torre': document.getElementById("demo").innerHTML = "A Torre se movimenta todo o tabuleiro em linha reta";
        break;

        case 'pião': document.getElementById("demo").innerHTML = "O Pião se movimenta para frente e para traz e ataca em diagonal";7
        break;

        default: document.getElementById("demo").innerHTML = "Essa não é uma peça de xadres. Escolha uma opção valida!"
    }
    if (peca == "teste") {
        
    }
}
