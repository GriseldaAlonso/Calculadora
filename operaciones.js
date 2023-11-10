function suma(numero1, numero2){
    const resultado = numero1  + numero2;
    if (isNaN(resultado)) {
        return "Error: los valores deben ser numericos";
    } else {
        return resultado; 
    }
}

function resta(numero1, numero2){
	const resultado = numero1 - numero2;
    if (isNaN(resultado)) {
        return "Error: los valores deben ser numericos";
    } else {
        return resultado; 
    }
}

function multiplicacion(numero1, numero2){
	const resultado = numero1 * numero2;
    if (isNaN(resultado)) {
        return "Error: los valores deben ser numericos";
    } else {
        return resultado; 
    }
}

function division(numero1, numero2){
	const resultado = numero1 / numero2;
    if (isNaN(resultado)) {
        return "Error: los valores deben ser numericos";
    } else {
        return resultado; 
    }
}

module.exports = {
    suma, 
    resta, 
    multiplicacion, 
    division};