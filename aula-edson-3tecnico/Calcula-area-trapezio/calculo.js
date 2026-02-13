const calcular = document.getElementById('calcular');

function area_trapezio(){
    const base_menor = Number(document.getElementById('base-maior').value);
    const base_maior = Number(document.getElementById('base-menor').value);
    const altura = Number(document.getElementById('altura').value);
    const resultado = document.getElementById('resultado');

    if(base_menor > 0 && base_maior > 0 && altura > 0){

        const valor_area = ((base_maior + base_menor) * altura) / 2;
        let classificacao = '';
        if(valor_area < 10){
            classificacao = 'Trapézio Pequenino';
        }else if(valor_area < 15){
            classificacao = 'Trapézio Ideal';
        }else if(valor_area < 20){
            classificacao = 'Trapézio Grandinho';
        }else if(valor_area < 25){
            classificacao = 'Trapézio meio Grande';
        }else if(valor_area < 30){
            classificacao = 'Trapézio Grande';
        }else {
            classificacao = 'Trapézio Grandão, cuidado hein!'
        }
        resultado.textContent = `Seu Trapézio tem ${valor_area} de área! E está classificado como ${classificacao}`;
    }
    else{
        resultado.textContent = 'Preencha todos os campos'
    }

}
calcular.addEventListener('click', area_trapezio);



