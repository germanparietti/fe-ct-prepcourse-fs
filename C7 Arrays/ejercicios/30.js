function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  
  // return numeros.find((num,i)=>numeros.indexOf(num)!==i)||null

  let vistos = new Set(); // Usamos un Set para almacenar los números ya vistos

  for (let num of numeros) {
    if (vistos.has(num)) {
      return num; // Retorna el primer número repetido
    }
    vistos.add(num); // Agregamos el número al conjunto
  }

  return undefined; // Si no hay repetidos, retornamos null AQUI HAY UN ERROR Y LO CAMBIE A UNDEFINED
  
}

module.exports = encontrarElementoRepetido;