function lutar(){
    const classe = document.getElementById('classe').value;
    const arma = document.getElementById('arma').value.trim();
    const log = document.getElementById('log');

    if(!arma){
        log.innerHTML = "Escolha uma Arma vagabundo safado, vai na mão mesmo?";
        return;
    }

    const dado = Math.floor(Math.random()*20) + 1;
    let resultado = `🎲 Dado: ${dado} | <strong>${classe}<strong> com ${arma}`

    switch(classe){
        case "Guerreiro": 
        if(arma.toLowerCase() === "espada" && dado > 5){
            resultado += " <span class = 'sucesso'> SUCESSO: Você matou o dragão com uma espada!</span>"
            log.innerHTML = resultado
        
        }else if(dado > 15){
            resultado += "<span class = 'sucesso'> VITÓRIA: você MERENDOU ele na porrada, boaaa!</span>"
            log.innerHTML = resultado

        }else{
            resultado += "<span class = 'derrota'> DERROTA: O dragão te moer na porrada seu lixo!!</span>"
            log.innerHTML = resultado
        
        };
        case "Mago": 
        if(arma.toLowerCase() === "cajado" && dado > 5){
            resultado += "<span class = 'sucesso'> VITÓRIA: você ESTOUROU o dragão com uma magia básica, boaaa!</span>"
            log.innerHTML = resultado
        
        }else if(dado > 15){
            resultado += "<span class = 'sucesso'> SUCESSO: Você matou o dragão com uma macumba das locas!</span>"
            log.innerHTML = resultado

        }else{
            resultado += "<span class = 'derrota'> DERROTA: O CARA PERDEU DE MAGO?????? Tu é ruim ein</span>"
            log.innerHTML = resultado
        
        };

    }


}







