/**Santa Claus 🎅 quiere enmarcar los nombres de los niños buenos para decorar su taller 🖼️, pero el marco debe cumplir unas reglas específicas. Tu tarea es ayudar a los elfos a generar este marco mágico.

Reglas:

Dado un array de nombres, debes crear un marco rectangular que los contenga a todos.
Cada nombre debe estar en una línea, alineado a la izquierda.
El marco está construido con * y tiene un borde de una línea de ancho.
La anchura del marco se adapta automáticamente al nombre más largo más un margen de 1 espacio a cada lado.
Ejemplo de funcionamiento:

createFrame(['midu', 'madeval', 'educalvolpz'])

// Resultado esperado:
***************
* midu        *
* madeval     *
* educalvolpz *
***************

createFrame(['midu'])

// Resultado esperado:
********
* midu *
********

createFrame(['a', 'bb', 'ccc'])

// Resultado esperado:
*******
* a   *
* bb  *
* ccc *
*******

createFrame(['a', 'bb', 'ccc', 'dddd'])

**/

function createFrame(names) {
    // Code here
    const maxCaracteres = Math.max(...names.map(name => name.length));
    // Crear el marco top y bottom
    const marcoTB = "*".repeat(maxCaracteres + 4);
    let marco = [marcoTB]; 
    // Agregar los nombres al marco
    names.forEach(element => {
    const linea = `* ${element}${" ".repeat(maxCaracteres - element.length)} *`;
    // Agregar espacios en blanco 
    marco.push(linea); 
    });
    // Agrega el marco inferior
    marco.push(marcoTB); 
    return marco.join("\n"); 
  }
console.log(createFrame(['midu', 'madeval', 'educalvolpz']));
console.log(createFrame(['midu']));
console.log(createFrame(['a', 'bb', 'ccc']));
console.log(createFrame(['a', 'bb', 'ccc', 'dddd']));