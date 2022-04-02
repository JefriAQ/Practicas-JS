'use strict';

// funciones anonimas 

function suma(n1,n2,fun) {
    var suma = n1 + n2;
    fun(suma);
    return suma;
}

suma(5,7,d => {
    console.log('la suma es ' + d);
    console.log('La multiplicacion es ' + d *2);
});

// Si llava mas de un parametor si incluiremos los parentesis
// es igual que los callbacks solo que aqui se usa flecha y no function estas se usan mas que las anonimas normales
