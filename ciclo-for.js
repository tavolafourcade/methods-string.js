for(let i = 0; i < 10; i++){
  console.log('El valor de i es igual a: ' + i);
}

/*En este ejercicio nuestra tarea es completar la función noParesDeContarImparesHasta. Esta función recibe un número X por parámetro y cuenta la cantidad de números impares que hay desde el número 0 hasta el número X (inclusive) y luego retorna ese valor. Para resolver la ejercitación debemos utilizar el for .*/
console.log('---------------')

function noParesDeContarImparesHasta(numero){
  
  for(let i = 1; i<=numero; i++){
      if(i%2!=0){
        console.log(i);
      }
      //console.log(cont);
  }
  //console.log(cont);
}

noParesDeContarImparesHasta(5)

