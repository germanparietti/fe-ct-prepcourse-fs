function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  let sumaTotal=0
  resultadosTest.forEach(e => {
    sumaTotal=sumaTotal+e
  });
  return sumaTotal/resultadosTest.length
}

module.exports = promedioResultadosTest;
