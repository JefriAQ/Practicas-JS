    // donde nace y donde muere una variable


    'use strict';

    var global = 'Variable global';

    function MostrarConsola() {
        var variable_funcion = 'variable dentro de la funcion';
        console.log(global);
        console.log(variable_funcion);
    }


    MostrarConsola();


