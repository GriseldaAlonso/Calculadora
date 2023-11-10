const { app } = require('./main');

const operacion = process.argv[2];
const numero1 = process.argv[3];
const numero2 = process.argv[4];

const cli = (operacion) => {
    if (operacion === 'sumar') {
        return app('sumar', numero1, numero2);
    } else if (operacion === 'restar') {
        return app('restar', numero1, numero2);
    } else if (operacion === 'multiplicar') {
        return app('multiplicar', numero1, numero2);
    } else if (operacion === 'dividir') {
        return app('dividir', numero1, numero2);
    } else {
        console.log(`La operación ${operacion} no es válida`);
    }
};


cli(operacion);