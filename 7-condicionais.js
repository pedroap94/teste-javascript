console.log("Trabalhando com condicionais");

const list = new Array(`Curitiba`, `São Paulo`, `Rio de Janeiro`);

console.log(`Destinos possíveis:`);
console.log(list)

let idadeCompador = 18;
let estaAcompanhada = false;
const temPassagemComprada = true;

// if (idadeCompador >= 18) {
//     console.log(`Passagem para ${list[1]} vendida`);
//     list.splice(1, 1);
// } else if (estaAcompanhada) {
//     console.log("Comprador está acompanhado");
//     list.splice(1, 1);
// } else {
//     console.log("Não é possível vender passagem para menores de idade desacompanhados");
// }


if (idadeCompador >= 18 || estaAcompanhada) {
    console.log(`Passagem para ${list[1]} vendida`);
    list.splice(1, 1);
} else {
    console.log("Não é possível vender passagem para menores de idade desacompanhados");
}

console.log("Embarque: \n")
if(idadeCompador >= 18 && temPassagemComprada){
    console.log("Boa viagem");

} else {
    console.log("Você não pode embarcar");
}


console.log(`Passagens restantes`);
console.log(list);