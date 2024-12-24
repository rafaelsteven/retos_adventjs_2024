/*

El Grinch ha estado haciendo de las suyas en el Polo Norte y ha sembrado bombas de carbón explosivo 💣 en la fábrica de juguetes de los duendes. Quiere que todos los juguetes queden inutilizados y por eso ha dejado una cuadrícula donde algunas celdas tienen carbón explosivo (true) y otras están vacías (false).

Los duendes necesitan tu ayuda para mapear las zonas peligrosas. Cada celda vacía debe mostrar un número que indique cuántas bombas de carbón explosivo hay en las posiciones adyacentes, incluidas las diagonales.

detectBombs([
  [true, false, false],
  [false, true, false],
  [false, false, false]
])
// [
//   [1, 2, 1],
//   [2, 1, 1],
//   [1, 1, 1]
// ]

detectBombs([
  [true, false],
  [false, false]
])
// [
//   [0, 1],
//   [1, 1]
// ]

detectBombs([
  [true, true],
  [false, false],
  [true, true]
])

// [
//   [1, 1],
//   [4, 4],
//   [1, 1]
// ]
Nota: ¿Quieres una pista? Seguro que has jugado al juego de buscaminas antes… 😉

*/


/**
 * @param {boolean[][]} grid
 * @returns {number[][]}
 */

//5 estrellas
function detectBombs(grid) {
  return grid.map((row, y) => {
      // Itera sobre cada fila de la cuadrícula.
      const filaSig = grid[y + 1];
      const filaAnt = grid[y - 1];
      return row.map((bool, x, currentRow) => {
          // Itera sobre cada celda de la fila actual.
          const valorDer = currentRow[x + 1];
          const valorIzq = currentRow[x - 1];
          // Calcula cuántas bombas hay alrededor de la celda actual.
          return [
              valorDer,               // Derecha.
              valorIzq,               // Izquierda.
              filaSig?.[x],           // Abajo.
              filaSig?.[x + 1],       // Abajo-Derecha.
              filaSig?.[x - 1],       // Abajo-Izquierda.
              filaAnt?.[x],           // Arriba.
              filaAnt?.[x - 1],       // Arriba-Izquierda.
              filaAnt?.[x + 1],       // Arriba-Derecha.
          ].reduce((acc, n) => acc + (n ? 1 : 0), 0); 
      });
  });
}

  
  console.log(detectBombs([
    [true, false, false],
    [false, true, false],
    [false, false, false]
  ]));
