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
      return a + b;
    }
    if (operacion == "resta") {
      return a - b;
    }
    if (operacion == "multiplicar") {
      return a * b;
    }
    if (operacion == "dividir") {
      return a / b;
    }
  } else {
    return "valor ingresado no es un numero";
  }
};
