/*

Los elfos del Polo Norte han creado un robot 🤖 especial que ayuda a Papá Noel a distribuir regalos dentro de un gran almacén. El robot se mueve en un plano 2D y partimos desde el origen (0, 0).

Queremos saber si, tras ejecutar una serie de movimientos, el robot vuelve a estar justo donde empezó.

Las órdenes básicas del robot son:

L: Mover hacia la izquierda
R: Mover hacia la derecha
U: Mover hacia arriba
D: Mover hacia abajo
Pero también tiene ciertos modificadores para los movimientos:

*: El movimiento se realiza con el doble de intensidad (ej: *R significa RR)
!: El siguiente movimiento se invierte (ej: R!L se considera como RR)
?: El siguiente movimiento se hace sólo si no se ha hecho antes (ej: R?R significa R)
Nota: Cuando el movimiento se invierte con ! se contabiliza el movimiento invertido y no el original. Por ejemplo, !U?U invierte el movimiento de U, por lo que contabiliza que se hizo el movimiento D pero no el U. Así !U?U se traduce como D?U y, por lo tanto, se haría el movimiento U final.

Debes devolver:

true: si el robot vuelve a estar justo donde empezó
[x, y]: si el robot no vuelve a estar justo donde empezó, devolver la posición donde se detuvo
isRobotBack('R')     // [1, 0]
isRobotBack('RL')    // true
isRobotBack('RLUD')  // true
isRobotBack('*RU')   // [2, 1]
isRobotBack('R*U')   // [1, 2]
isRobotBack('LLL!R') // [-4, 0]
isRobotBack('R?R')   // [1, 0]
isRobotBack('U?D')   // true
isRobotBack('R!L')   // [2,0]
isRobotBack('U!D')   // [0,2]
isRobotBack('R?L')   // true
isRobotBack('U?U')   // [0,1]
isRobotBack('*U?U')  // [0,2]
isRobotBack('U?D?U') // true

// Ejemplos paso a paso:
isRobotBack('R!U?U') // [1,0]
// 'R'  -> se mueve a la derecha 
// '!U' -> se invierte y se convierte en 'D'
// '?U' -> se mueve arriba, porque no se ha hecho el movimiento 'U'

isRobotBack('UU!U?D') // [0,1]
// 'U'  -> se mueve arriba
// 'U'  -> se mueve arriba
// '!U' -> se invierte y se convierte en 'D'
// '?D' -> no se mueve, ya que ya se hizo el movimiento 'D'

*/

/** @param {string} moves
 * @returns {true|[number, number]} Return true if robot returns or position
 */
// 5 estrellas
function isRobotBack(moves) {
    const values = { 'R': 1, 'L': -1, 'U': 1, 'D': -1 };
    const inverso = { 'R': 'L', 'L': 'R', 'U': 'D', 'D': 'U' };
    let x = 0, y = 0, accion = '', text = '';
    for (const char of moves) {
        text += char;
        if (values[char] !== undefined) { 
            let delta = 0;
            if (accion === '*') {
                delta = 2 * values[char];
            } else if (accion === '!') {
                const inversoChar = inverso[char];
                text = text.slice(0, -1) + inversoChar;
                delta = values[inversoChar];
            } else if (accion === '?') {
                delta = text.slice(0, -1).includes(char) ? 0 : values[char];
            } else {
                delta = values[char];
            }
            if (char === 'R' || char === 'L') {
                x += delta;
            } else if (char === 'U' || char === 'D') {
                y += delta;
            }
            accion = '';
        } else { 
            accion = char;
        }
    }
    return !x&&!y ? !0: [x, y]
}


console.log(isRobotBack('R!U?U'));