let ufs = document.getElementById('estados');

for (let i = 0; i < 27; i += 1) {
    let estados = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"];
    let option = document.createElement('option');
    option.setAttribute('value', estados[i]);
    option.innerHTML = (estados[i]);
    ufs.appendChild(option)
}