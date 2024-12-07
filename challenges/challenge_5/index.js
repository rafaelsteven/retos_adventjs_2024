/**
 
Los elfos 🧝🧝‍♂️ de Santa Claus han encontrado un montón de botas mágicas desordenadas en el taller. Cada bota se describe por dos valores:

type indica si es una bota izquierda (I) o derecha (R).
size indica el tamaño de la bota.
Tu tarea es ayudar a los elfos a emparejar todas las botas del mismo tamaño que tengan izquierda y derecha. Para ello, debes devolver una lista con los pares disponibles después de emparejar las botas.

¡Ten en cuenta que puedes tener más de una zapatilla emparejada del mismo tamaño!

const shoes = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 42 }
]

organizeShoes(shoes)
// [38, 42]

const shoes2 = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'I', size: 38 },
  { type: 'I', size: 38 },
  { type: 'R', size: 38 }
]
// [38, 38]

const shoes3 = [
  { type: 'I', size: 38 },
  { type: 'R', size: 36 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 43 }
]

organizeShoes(shoes3)
// []

 */

/**
 * @param {{ type: 'I' | 'R', size: number }[]} shoes
 * @returns {number[]} Available shoes 
 */
// 3 estrellas
// function organizeShoes(shoes) {
//     const pares = [];
//     const izquierdas = shoes.filter(shoe => shoe.type === 'I' );
//     for (let i = 0; i < shoes.length; i++) {
//         const index = izquierdas.findIndex(
//             izquierda =>
//                 izquierda.type === 'I' &&
//                 shoes[i].size === izquierda.size &&
//                 shoes[i].type === 'R'
//         );
    
//         if (index !== -1) { 
//             pares.push(shoes[i].size); 
//             izquierdas.splice(index, 1);
//         }
//     }  
//     return pares;
// }

// 5 estrellas
function organizeShoes(shoes) {
    const pares = [];
    const checked = [];
    const sel = {  I:0,R:1  };
    const inv = {  I:1,R:0  };
    for (const { type, size } of shoes) {
        // Calcular el índice en el array `checked` para el tipo inverso
        if (checked[size*2+inv[type]]  ) {
            // Si existe un zapato del tipo opuesto ya chequeado para el mismo tamaño:
            checked[size*2+inv[type]]--; 
            pares.push(size);
        } else {
            // Si no hay un zapato del tipo opuesto disponible:
            // Inicializar el contador para este tipo de zapato si no existe
            checked[size*2+sel[type]]??=0
            checked[size*2+sel[type]]+=1
        }
    }
    return pares;
}
const shoes = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'R', size: 38 }
]
  
const result = organizeShoes(shoes);
  
console.log(result);