'use strict';

//tomar elemento por id
var div1 = document.getElementById( 'div1')

// callback para cambiar valores del DOm    
div1.innerHTML = 'Texto cambiado atravez de JS';

div1.style.fontSize = '25px';





// Cuando hay varios elementos clases que pueden ser mas de 1
// se especifica como si fuera un array a cual queremos modificar
var parrafo1 = document.getElementsByClassName('parrafo1');


// Se accede a solo una de las clases _> se especifica [1] la cantidad y al igual que con los arrays
//EMpieza en 0
parrafo1[1].innerHTML =  'Texto cambiado';