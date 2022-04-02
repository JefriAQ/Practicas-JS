/// anonimas o callbacks

function sumar(n1,n2,multiplicar) {
    var suma = n1 + n2;
    multiplicar(suma);
    return suma;
}

sumar(5,7,function(d){
    console.log('la suma es ' + d);
    console.log('la multiplicacion es ' + d * 2);
});

// Sintaxis de una funcion normal
// funtion nombre (parametros){instruccion};

// SINTAXIS DE UNA FUNCION ANONIMA

var producto = function (a,b){return a * b;};
var resultado = producto(3,6) ;
console.log(resultado);
/*Las funciones anonimas o callbacks no tienen nombre de funcion
para ser llamadas las mismas se asignan a una variable o parametro para 
que esta actue como el nombre de la funcion como se puede ver en los
ejemplos anteriores */

// otra forma es el contrstuctor funcion()

var miFuncion = new Function("a","b", "return a*b;");
var resultado2 = miFuncion(5,7);
console.log(resultado2);

/*Ojo muy importante es tratada como un objeto en esta forma
y la F en new Function es obligatoria mayuscula */


// Funciones anonimas autoinvocadas

(function () {alert('Hola');}());

/*Para estas tienes que hacer uan funcion anonima cerrada entre
parentesis () y ponerle unos parentesis al final como se ve aqui */