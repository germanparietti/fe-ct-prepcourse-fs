function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  let producto=1;
  if(a<b){
    for(a;a<=b;a++){
      producto=producto*a
      if(producto===0){return 0}
    }
    return producto;
  }if(b<a){
    for(b;b<=a;b++){
      producto=producto*b;
      if(producto===0){return 0}
    }
    return producto;
  }else{
    return a
  }

}

module.exports = productoEntreNúmeros;