'use strict';
//objeto que recebe o nome dos sons original
const sons = {
    'A': 'boom.wav',
    'S': 'clap.wav',
    'D': 'hihat.wav',
    'F': 'kick.wav',
    'G': 'openhat.wav',
    'H': 'ride.wav',
    'J': 'snare.wav',
    'K': 'tink.wav',
    'L': 'tom.wav'
};
//function cria div
const criarDiv = (texto) =>{
    const div = document.createElement('div')
    div.classList.add('key');
    div.textContent = texto;
    div.id = texto;
    document.getElementById('container').appendChild(div);

}
//exibe os sons dentro do que tiver no obj ... obj.keys retorna a chave do obj e o forEach transforma num array
const exibir = (sons) =>{
    Object.keys(sons).forEach(criarDiv)

}


const tocarSom = (letra) =>{
    const audio = new Audio(`./sounds/${sons[letra]}`)
    audio.play();
    
}

const addEfeito = (letra) => document.getElementById(letra).classList.add('active')


const removerEfeito = (letra) => {
    const div = document.getElementById(letra);
    const removeActive = () => div.classList.remove('active');
    div.addEventListener('transitionend',removeActive);
};


const ativarDiv = (evento) =>{
    
    const letra = evento.type == 'click' ? evento.target.id 
    : evento.key.toUpperCase();
    
    const letraPermitida = sons.hasOwnProperty(letra);
    if(letraPermitida){
        addEfeito(letra);
        tocarSom(letra);
        removerEfeito(letra)
    }
}
exibir(sons);

document.getElementById('container').addEventListener('click', ativarDiv );

window.addEventListener('keyup',ativarDiv);