'use strict';

var boton = document.querySelector('#boton');
var div = document.querySelector('#div');


boton.addEventListener('click', function () {
    console.log('Has pulsado el boton');
    div.innerHTML = ' <h1>PULSASTE EL BOTON</h1>';
} );


function alerta(){
    alert('Has pulsado el div')
}

// Ejemplos de atributos varios

// llevan on cuando van en el html si fuera
// en el eventlistener no llevan el on



// onclick
//oncontextmenu  = boton secundario del raton
//oncontextcenter = boton central del raton
//onmousedown = al pasar el boton hacia abajo
//ondblclick   = doble click
//onmouseleave = cuando se suelta la pulsacion del raton
//onmouseover = cuando pasas por encima del raton
//onmouseup = cuando pasas por arriba