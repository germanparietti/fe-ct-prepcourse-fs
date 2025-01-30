function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
    let reversible=texto.split("");
    

let revertido=reversible.reverse()
return revertido.join("")
}

module.exports = invertirTexto;
