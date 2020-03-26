let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: 'Sim',
  };

let person = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell’s Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: 'Sim',
}

for(let indice in info){
    if(info[indice] !== 'Sim'){
        console.log(info[indice] + " e " + person[indice]);
    }else{
        console.log('Ambos Recorrentes');
    }
}
