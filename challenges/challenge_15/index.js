/*

l Polo Norte ha llegado ChatGPT y el elfo Sam Elfman está trabajando en una aplicación de administración de regalos y niños.

Para mejorar la presentación, quiere crear una función drawTable que reciba un array de objetos y lo convierta en una tabla de texto.

La tabla dibujada debe representar los datos del objeto de la siguiente manera:

Tiene una cabecera con el nombre de la columna.
El nombre de la columna pone la primera letra en mayúscula.
Cada fila debe contener los valores de los objetos en el orden correspondiente.
Cada valor debe estar alineado a la izquierda.
Los campos dejan siempre un espacio a la izquierda.
Los campos dejan a la derecha el espacio necesario para alinear la caja.
Mira el ejemplo para ver cómo debes dibujar la tabla:

drawTable([
  { name: 'Alice', city: 'London' },
  { name: 'Bob', city: 'Paris' },
  { name: 'Charlie', city: 'New York' }
])
   +---------+----------+
// +---------+-----------+
// | Name    | City      |
// +---------+-----------+
// | Alice   | London    |
// | Bob     | Paris     |
// | Charlie | New York  |
// +---------+-----------+

drawTable([
  { gift: 'Doll', quantity: 10 },
  { gift: 'Book', quantity: 5 },
  { gift: 'Music CD', quantity: 1 }
])
// +----------+----------+
// | Gift     | Quantity |
// +----------+----------+
// | Doll     | 10       |
// | Book     | 5        |
// | Music CD | 1        |
// +----------+----------+

*/

/**
  * @param {Array<Object>} data
  * @returns {string}
  */
/**
  * @param {Array<Object>} data
  * @returns {string}
  */

//4 estrellas
function drawTable(data) {
    const keys = [...new Set(data.flatMap(Object.keys))];
    const columna = keys.map(key =>
        Math.max(
            key.length,
            ...data.map(obj => String(
                obj[key] !== undefined ? obj[key] 
                : "").length)
        )
    );
    const lineasTB = columna.map(width => "-".repeat(width + 2));
    const headers = keys.map((key, index) => 
        key.charAt(0).toUpperCase() + key.slice(1).padEnd(columna[index]
        ));
    const topTB = `+${lineasTB.join('+')}+`;
    const headerTB = `| ${headers.join('| ')}|`;
    const rows = data.map(obj =>
        `| ${keys.map((key, index) => String(
            obj[key] !== undefined ? obj[key] : "")
            .padEnd(columna[index])).join(' | ')} |`
    );
    const tabla = [topTB, headerTB, topTB, ...rows, topTB].join("\n");
    return tabla;
}
  console.log(drawTable([
    { name: 'Alice', city: 'London' }
  ]));

  