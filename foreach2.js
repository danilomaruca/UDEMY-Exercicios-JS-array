Array.prototype.forEach2 = function(callback){
    for (let i = 0; i < this.length; i++) {
        callback(this[1], i, this)
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function(nome, indice) {      //forma tradicional com até 3 parâmetros
    console.log(`${indice + 1}) ${nome}`)
})