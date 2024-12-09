/*

¡Es hora de seleccionar a los renos más rápidos para los viajes de Santa! 🦌🎄
Santa Claus ha organizado unas emocionantes carreras de renos para decidir cuáles están en mejor forma.

Tu tarea es mostrar el progreso de cada reno en una pista de nieve en formato isométrico.

La información que recibes:

indices: Un array de enteros que representan el progreso de cada reno en la pista:
0: El carril está vacío.
Número positivo: La posición actual del reno desde el inicio de la pista.
Número negativo: La posición actual del reno desde el final de la pista.
length: La longitud de cada carril.
Devuelve un string que represente la pista de la carrera:

Cada carril tiene exactamente length posiciones llenas de nieve (~).
Cada reno se representa con la letra r.
Los carriles están numerados al final con /1, /2, etc.
La vista es isométrica, por lo que los carriles inferiores están desplazados hacia la derecha.
Ejemplos:

drawRace([0, 5, -3], 10)

  ~~~~~~~~~~ /1
 ~~~~~r~~~~ /2
~~~~~~~r~~ /3


drawRace([2, -1, 0, 5], 8)

   ~~r~~~~~ /1
  ~~~~~~~r /2
 ~~~~~~~~ /3
~~~~~r~~ /4


drawRace([3, 7, -2], 12)

  ~~~r~~~~~~~~ /1
 ~~~~~~~~r~~~ /2
~~~~~~~~~r~~ /3


*/

/**
 * @param {number[]} indices - The reno indices
 * @param {number} length - The length of the race
 * @returns {string} The reno race
 */

// 4 estrellas
// function drawRace(indices, length) {
//     // Generar la pista de ~
//     let camino = "~".repeat(length); 
//     let newChar = "r";
//     const caminos = indices.map((index, i) => {
//         // espacios inicial
//         let espacios = " ".repeat(indices.length - i - 1);
//         // nuevo camino
//         let newCamino = index === 0 ? camino : index === -1 ? camino.slice(0, camino.length - 1) + newChar : camino.slice(0, index) + newChar + camino.slice(index + 1);
//         return `${espacios}${newCamino} /${i + 1}`;
//     });
//     return caminos.join("\n");
// }

//5 estrellas
function drawRace(indices, length) {
    const baseCamino = "~".repeat(length); 
    const caminos = indices.map((index, i) => {
        const espacios = " ".repeat(indices.length - i - 1); 
        let caminoActual;
        if (index === 0) {
            caminoActual = baseCamino;
        } else if (index === -1) {
            caminoActual = baseCamino.slice(0, length - 1) + "r"; 
        } else {
            caminoActual = baseCamino.slice(0, index) + "r" + baseCamino.slice(index + 1);
        }
        return `${espacios}${caminoActual} /${i + 1}`;
    });
    return caminos.join("\n"); 
}
console.log(drawRace([3, 7, -1], 12));
