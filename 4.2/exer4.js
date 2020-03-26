let n = 5;
let l, c, i;

l = n / 2;

for (l; l < n; l++) {
    for(c = 0; c < n; c++){
        console.log(' ');
    }
    for(i = 0; i < l; i++){
        console.log('*')
    }
}