// No JS o array é um objeto, não é indicado misturar dados de tipos diferentes
console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array ('Bia', 'Carlos', 'Ana' )
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'      
aprovados.push('Abia')      //adicionar elementos no array
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8]) === undefined

console.log(aprovados)
aprovados.sort()        //altera o array de forma ordenada
console.log(aprovados)

delete aprovados[1]     //remove elemento do array e coloca undefined na posição
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2)      // adiciona, remove e remove e adiciona ao mesmo tempo elementos do array
console.log(aprovados)