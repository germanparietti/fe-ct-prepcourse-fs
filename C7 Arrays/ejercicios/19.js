function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
  console.log(arguments)
  if(arguments.length===0)return 0;
  if(arguments.length===1)return arguments[0];
  let producto=1;
  Array.from(arguments).forEach((e,i) => {
    producto=producto*e
  });
  return producto
}

module.exports = multiplicarArgumentos;
