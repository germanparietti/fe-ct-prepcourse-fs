function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  let suma=0;
  if(1<=n){
    for(i=1;i<=n;i++){
      suma=suma+i
      console.log(suma)
    }
    return suma;
  }else if(n<1){
    return suma
  }
}

module.exports = sumarHastaN;
