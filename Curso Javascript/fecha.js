'use strict';

// Fechas

var fecha = new Date();
var hora = fecha.getHours().toString();
var minutos = fecha.getMinutes().toString();
var segundos = fecha.getSeconds().toString();
console.log(fecha);
console.log(hora  + minutos  + segundos ); //  para que esto funcione lo paso a string con toString.
console.log(hora + ':' + minutos + ':' + segundos );