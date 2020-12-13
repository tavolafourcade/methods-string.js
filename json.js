let amigos = ["Coco", "Pablito", "Sus", "Franco"];

// console.log(amigos);
// Convirtiendo un array a string
let amigosJSON = JSON.stringify(amigos);

console.log(amigosJSON);

// Puede pasar que me hayan pasado en string y lo quiero convertir a su formato original.

let amigosOriginal = JSON.parse(amigosJSON);

console.log("Version original")
console.log(amigosOriginal);

let persona = {
  nombre: "Carli",
  edad: 26,
  domicilio: "Calle 123"
}

console.log("Objeto", persona);

// Convirtiendo a string
let personaJSON = JSON.stringify(persona);

console.log("JSON", personaJSON);

// Convirtiendo al formato original con parse()

let personaOriginal = JSON.parse(personaJSON);

console.log("Objeto Original", personaOriginal);