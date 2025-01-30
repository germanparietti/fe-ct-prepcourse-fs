function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:

// SOLUCIÓN 1 CON DESTRUCTURING
  //  if(array[0]){let numero=Math.max(...array)
  //  return array.indexOf(numero)}else{return 0}


  // SOLCIÓN 2
  let grande;
  if(!array[0]){return 0}
    
  array.forEach(element => {
    if(!grande)grande=element
    if(element>grande){grande=element}
      
    });
    return array.indexOf(grande)
    
}

module.exports = encontrarIndiceMayor;
