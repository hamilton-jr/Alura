/* function tocaSomPom() {
    document.querySelector('#som_tecla_pom').play();
} */
//document.querySelector('.tecla_pom').onclick = tocaSomPom;

/* const listaDeTeclas = document.querySelectorAll('.tecla');
const listaDeAudio = document.querySelectorAll('audio');
for (let i = 0; i < listaDeTeclas.length; i++) {   
    arrFuncoes = [];
    arrFuncoes[i] = function () {listaDeAudio[i].play();}
    listaDeTeclas[i].onclick = arrFuncoes[i];} */

function tocaSom (seletorElemento) {
    const elemento = document.querySelector(seletorElemento);

    if(elemento && elemento.localName === 'audio'){
        elemento.play();
    }
    else {
        console.log('Elemento ou seletor não encontrado.');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length;contador++){
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string
    tecla.onclick = function (){tocaSom(idAudio);}

    tecla.onkeydown = function (evento) {        
        if((evento.code === 'Space') || (evento.code === 'Enter')){
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function (evento) {
        if((evento.code === 'Space') || (evento.code === 'Enter')){
        tecla.classList.remove('ativa');
        }
    }

}
