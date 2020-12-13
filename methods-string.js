//Ejemplo de Length
let mensaje = 'Gran dia para practicar JS';
console.log(mensaje.length);

//Ejemplo de indexOf
console.log(mensaje.indexOf('dia'))

//Ejemplo de slice
console.log(mensaje.slice(0,5));

let mensaje2 = '     Gran dia para practicar JS';

//Ejemplo de trim
console.log(mensaje2.trim());

//Ejemplo de split
console.log(mensaje2.split(' '));

//Ejemplo de replace
console.log(mensaje2.replace('Gran', 'Excelente'));


function dominio(string){
  return 'http://www.' + string;
}

console.log('-------------')
console.log(dominio("digitalhouse.com.ar"));

