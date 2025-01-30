function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  let resultado=0;
  arrayOfNums.forEach(e => {
    resultado=resultado+e
  });
return resultado

}

module.exports = agregarNumeros;
