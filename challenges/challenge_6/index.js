/**
 
Ya hemos empaquetado cientos de regalos 🎁… pero a un elfo se le ha olvidado revisar si el regalo, representado por un asterisco *, está dentro de la caja.

La caja tiene un regalo (*) y cuenta como dentro de la caja si:

Está rodeada por # en los bordes de la caja.
El * no está en los bordes de la caja.
Ten en cuenta entonces que el * puede estar dentro, fuera o incluso no estar. Y debemos devolver true si el * está dentro de la caja y false en caso contrario.

Ejemplos:

inBox([
  "###",
  "#*#",
  "###"
]) // ➞ true

inBox([
  "####",
  "#* #",
  "#  #",
  "####"
]) // ➞ true

inBox([
  "#####",
  "#   #",
  "#  #*",
  "#####"
]) // ➞ false

inBox([
  "#####",
  "#   #",
  "#   #",
  "#   #",
  "#####"
]) // ➞ false

 */

/** @param {string[]} gifts
 *  @returns {boolean} True if the gift is inside the box
 */

//3 estrellas
// function inBox(box) {
//   for (let i = 0; i < box.length; i++) {
//     const index = box[i].indexOf('*');
//     // Verificar si '*' está en el borde (línea superior o inferior)
//     if (index !== -1 && (i === 0 || i === box.length - 1)) {
//         return false;
//     }
//     // Verificar si '*' está dentro del área central
//     if (index > 0 && index < box[i].length - 1) {
//         return true;
//     }
//   }
//   return false;
// }

//5 estrellas
function inBox(box) {
  return box.slice(1, -1).some(line => {
    const index = line.indexOf('*');
    return index > 0 && index < line.length - 1; // * No en los bordes
  });
}
console.log(inBox([
  "#####",
  "#  #*",
  "#   #",
  "#####"
  ]) );