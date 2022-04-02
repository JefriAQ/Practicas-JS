
'use strict';

var n1 = prompt('Dime una palabra','una');
var n2 = prompt('Dime otra palabra','otra');

function  mostrarConsola(n1,n2) {

    console.log(n1 + ' ' + n2 );

}

function mostrarDocumento(params) {
    document.write(n1 + ' ' + n2 );

}

// si la funcion de adentro reccibe parametros la funcion master o principal
// tiene que tener estos mismos parametros
function mostrar (n1,n2,n3 = false) {

    if (n3 == false) {
        mostrarConsola(n1,n2);
    }else{
        mostrarDocumento(n1,n2);
    }

    }
 mostrar(n1,n2, false);