function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:
//SOLUCION NUMERO 1 CON FOR
//   if(numeros.length===0)return null;
// for(let i=0;i<numeros.length-1;i++){
//   console.log(numeros[i],numeros[i]+1,numeros[i+1])
//   if(numeros[i]+1!==numeros[i+1])return numeros[i]+1;
// }
// return null

//SOLUCION NUMERO 2 CON .find()
if (numeros.length === 0) return null; 

let faltante = numeros.find((num, i) =>numeros[i + 1] !== undefined &&  numeros[i + 1] !== num + 1);

// return faltante !== undefined? faltante + 1 : null; OPERADOR TERNARIO
if (faltante!==undefined) {
  return faltante + 1;
} else {
  return null;
}

}

module.exports = encontrarNumeroFaltante;