const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
  let objprop=Object.keys(objeto)
  console.log(objprop)
  return objprop.length
};

module.exports = contarPropiedades;
