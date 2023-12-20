const turnOn = document.getElementById('turnOn')
const turnOf = document.getElementById('turnOff')
const lamp = document.getElementById('lamp')

//verefica se a lampada esta quebrada atravez do src
function islampBroken (){
    return lamp.src.indexOf ('quebrada') > -1

}

//se nao for = islampBroken carrega img ligada
function lampON(){
    if( ! islampBroken () ){    
        lamp.src = './img/ligada.jpg'
    }

};
//se nao for = islampBroken carrega img desligada
function lampOff(){
    if( ! islampBroken () ){   
        lamp.src = './img/desligada.jpg'

    }
    
};
function lampBroken(){
    lamp.src = './img/quebrada.jpg'
};


turnOn.addEventListener('click', lampON);
turnOf.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampON);
lamp.addEventListener('mouseout', lampOff);
lamp.addEventListener('dblclick', lampBroken);
