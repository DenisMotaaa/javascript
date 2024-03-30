let relogio = document.querySelector('#relogio') //obtem elementos do html
let iniciar = document.querySelector('.iniciar')
let pausar = document.querySelector('.pausar')
let zerar = document.querySelector('.zerar')
let segundos = 0 
let timer //variavel global para manipular dentro das functions

function criaHrseg (segundos) { //funcao criar hr e segundos
    const data = new Date(segundos * 1000) //0 + 1 segundo e contando
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone:  'UTC' //inicia o timer em '00:00:00'
        

    });
}
function iniciaRg(){
     timer = setInterval(function(){   
          segundos++;
          relogio.innerHTML = criaHrseg(segundos);
    }, 1000)
}

//add uma funcao para escutar oq ta sendo clicado e mostra no console navegador

document.addEventListener('click',function(e){ 
console.log(e.target)
})

//------

iniciar.addEventListener('click', function(event){
    clearInterval(timer)
    iniciaRg();
    relogio.classList.remove('pausado') //remve uma classe ao elemento relogio

})
pausar.addEventListener('click', function(event){
    clearInterval(timer)
    relogio.innerHTML = criaHrseg(segundos);
    relogio.classList.add('pausado') //add uma classe ao elemento relogio

})
zerar.addEventListener('click', function(event){
    clearInterval(timer)
    relogio.innerHTML = '00:00:00' //quando apertar o botao o innerhtml mudara para '00:00:00'
    segundos= 0 // reseta o valor para inical
    relogio.classList.remove('pausado')

})
