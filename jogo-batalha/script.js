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

}







