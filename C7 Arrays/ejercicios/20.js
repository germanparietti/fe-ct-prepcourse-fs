function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  let iguales=true;
  array.forEach(e => {
    if(array[0]!==e)iguales=false;
  });
  return iguales
}

module.exports = todosIguales;
