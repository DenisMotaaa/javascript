'use strict';

const imagens = [
    {'id': '1', 'url': './img/fundo.jpg'},
    {'id': '2', 'url': './img/fundo1.jpg'},
    {'id': '3', 'url': './img/fundo2.jpg'},
];

const container = document.querySelector('#container-itens');


const loadImagens = (imagens, container) => {
    imagens.forEach(image => {
        container.innerHTML += 
        `
        <div class='item'>
           <img src='${image.url}'>
        </div>
        `
        
    });

}

loadImagens(imagens, container);

let items = document.querySelectorAll('.item');

const previos = () =>{
    container.appendChild(items[0])
    items = document.querySelectorAll('.item');
}

const next = () =>{
    const lastItem = items[items.length - 1]
    container.insertBefore(lastItem, items[0])
    items = document.querySelectorAll('.item');

}
document.querySelector('#previous').addEventListener('click', previos)
document.querySelector('#next').addEventListener('click', next)

