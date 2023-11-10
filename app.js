const {suma, resta, multiplicacion, division } = require('./operaciones.js');

function app (operacion, operando1, operando2) {
    switch (operacion){
        case "1":
            resultado = suma(operando1,operando2);
            console.log("El valor de la suma es: " + resultado);
            break;
    
        case "2":
            resultado = resta(operando1,operando2);
            console.log("El valor de la resta es: " + resultado);
            break;
    
        case "3":
            resultado = multiplicacion(operando1,operando2);
            console.log("El valor de la multiplicación es: " + resultado);
            break;
    
        case "4":
            resultado = division(operando1,operando2);
            console.log("El valor de la división es: " + resultado);
            break;
    
        default:
            console.log("La opción especificada no es correcta.");
            break;
    }
};

module.exports = {
    app
};