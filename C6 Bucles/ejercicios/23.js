function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:
  let multiplicador=2

  while(numero>1&&numero!==multiplicador){
    if(numero%multiplicador===0){return false}
    multiplicador++

  }return true
}

module.exports = esNumeroPrimo;
