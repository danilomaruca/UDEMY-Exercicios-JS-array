const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice) {      //forma tradicional com até 3 parâmetros
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))    //sem uso do indice

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)