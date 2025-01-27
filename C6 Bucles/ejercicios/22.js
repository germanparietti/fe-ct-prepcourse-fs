function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
  let cont=0;
  let suma=num;
  
  do{
    suma=suma+5
    cont++
  }while(cont<=7)
    return suma
}

module.exports = doWhile;