const { rejects } = require('assert');
// requireds
const fs = require('fs');

let listarTabla = (base, limite = 10) => {
    for (let n = 1; n <= limite; n++) {
        console.log(`${base} * ${n} = ${base*n}`);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        let data = '';

        if (!Number(base)) {
            reject('Introducir solamente números');
            return;
        }


        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i} \n `;
        }

        // fs se refiere a la variable de arriba
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`tabla-${base}-al-${limite}.txt`);
        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}