var num = 5;
var l;
var c;
var t;
var tri;

for(l = 0; l < num; l++){
    tri = '';
    for(c = 0; c < num - 1 - l; c++){
        tri += ' ';
    }
    for(t = 0; t < l + 1; t++){
        tri += '*';
    }
    console.log(tri)
}