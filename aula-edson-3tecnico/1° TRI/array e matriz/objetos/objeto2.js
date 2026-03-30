let carro = {
    marca: "Toyota",
    modelo: "Corola",
    ano: 2020,
    ligar: function(){
        console.log("Ligou essa bomba")
    },
    mostrarInfo: function(){
        console.log(`Marca: ${this.marca},\nModelo: ${this.modelo}`)
    }
};

carro.ligar()
carro.mostrarInfo()







