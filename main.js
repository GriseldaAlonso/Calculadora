const corroborarNum = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    return false;
  } else {
    return true;
  }
};

const calcular = (a, b, operacion) => {
  if (corroborarNum(a, b)) {
    if (operacion == "suma") {
      return suma(a,b);
    }
    if (operacion == "resta") {
      return resta(a, b);
    }
    if (operacion == "multiplicar") {
      return multiplicar(a, b);
    }
    if (operacion == "dividir") {
      return dividir(a, b);
    }
  } else {
    return "valor ingresado no es un numero";
  }
};


function suma(numero1, numero2) {
   return numero1 + numero2;
}

function resta(numero1, numero2) {
  return numero1 - numero2;
}

function multiplicacion(numero1, numero2) {
  return numero1 * numero2;
}

function division(numero1, numero2) {
  return numero1 / numero2;
}

console.log(suma(1,2,"suma"))