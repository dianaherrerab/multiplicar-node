// Grabar en un archivo de textolas tablas de multiplicar
//existen tres tipos de requires
// requireds
//const fs = require('fs');
// const fs = require('express');
// const fs = require('./fs');

// el package.json es para cuando se quiere compartir el proyecto
// la carpeta node-modules son todas las dependencias que necesita el paquete para funcionar

/* // forma de llamar a otro archivo
const { crearArchivo } = require('./multiplicar/multiplicar');
// let base = 'a';

let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1];


// module un objeto global que se puede utilizar a lo largo de la ejecucion

crearArchivo(base)
    .then(archivo => console.log(`Archivo creado ${archivo}`))
    .catch(err => console.log(err)); */


const argv = require('./config/yargs').argv;


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado ${archivo}`))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
}
// let parametro = argv[2];
// let base = parametro.split('=')[1];