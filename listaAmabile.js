const numeros = [1 , 2 , 3 , 4]

index = numeros.indexOf(2);

if(index > -1){
    numeros.splice(index, 1)
}

numeros.push (5)

console.log(numeros.length)
console.log (numeros)
