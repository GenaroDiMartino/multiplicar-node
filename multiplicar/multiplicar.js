const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite = 10) => {

    console.log('============='.green);
    console.log('============='.green);
    console.log('============='.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}\n`);
    }

}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor ${base} no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.txt`.red);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}




// revisar implementacion async await
// const fs = require('fs');

// let crearArchivo = async(base) => {

//     if (!Number(base)) {
//         throw new Error(`El valor ${base} no es un numero`)
//     }

//     let data = '';

//     for (let i = 1; i <= 10; i++) {
//         data += `${base} * ${i} = ${base*i}\n`;
//     }

//     fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//         if (err)
//             throw new Error(err)
//         else {
//             let tabla = await `tabla-${base}.txt`;
//             return tabla

//         }
//     });
// }