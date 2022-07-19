console.log(`\nTrabalhando com loops`)

const lista = new Array(`São Paulo`, `Curitiba`, `Rio de Janeiro`);

console.log(`Lista de destinos`);
console.log(lista);

let contador = 0;
const destino = `Curitiba`;
let destinoExiste = false;

// while (contador < 3) {
//     if (lista[contador] == destino) {
//         destinoExiste = true;
//         break;
//     }
//     contador++;
// }

console.log("Destino existe: ", destinoExiste)

for (let cont = 0; cont < 3; cont++) {
    if(lista[cont]==destino) {
        console.log("Destino existe");
        break
    } else {
        console.log("Destino não existe");
    }
}