let inputTarefa = document.querySelector('.input-tarefa');
let btnTarefa = document.querySelector('.btn-tarefa');
let tarefas = document.querySelector('.tarefas');

function criaLi (){  //cria uma funcao para criar um li dentro de ul
    let li = document.createElement('li')
    return li;
}

inputTarefa.addEventListener('keypress', function(e){
    if(e.keyCode === 13){ //tecla digitada identica a enter cria nova tarefa
        if(!inputTarefa.value) 
        return 
        criaTarefa(inputTarefa.value);

    }
})

function limpaInput(){
    inputTarefa.value = ''
    inputTarefa.focus(); //apos tarefa add o cursor continua dentro do input
  
}
function criaBotaoApagar (li){
    li.innerText += ' ' // espaco
    let btnApagar = document.createElement('button')//cria um botao 
    btnApagar.innerText = 'Apagar' //botao chamado apagar 
    //btnApagar.classList.add('limpa') add uma class ao btn
    btnApagar.setAttribute('class','classApagarbtn') //add uma class via setAtribute
    btnApagar.setAttribute('title','apagar tarefa?') //add um titulo ao btn

    li.appendChild(btnApagar)


}
function criaTarefa(txtInput){
    let li = criaLi();
    li.innerText = txtInput
    tarefas.appendChild(li)
    li.classList.add('liTarefa')
    limpaInput(); // chama funcao limpa toda vez q add nova tarefa
    criaBotaoApagar(li)//add uma nova tarefa, cria um botao de apagar chamando pela criaBotaoApagar()
    salvarTarefa();
}

btnTarefa.addEventListener('click', function(){
    if(!inputTarefa.value) 
    return 
    criaTarefa(inputTarefa.value);

})

document.addEventListener('click' , function(e) { //add um event ao document para capturar qual btn esta sendo clikado... mostrando console no navegador
    const observa = e.target 
    console.log(observa)

    if(observa.classList.contains('classApagarbtn')){ 
        observa.parentElement.remove();
        salvarTarefa()

    }
} )
function salvarTarefa(){ //function p salvar armazenar as tarefas criadas
    const liTarefas = tarefas.querySelectorAll('li')// seleciona o elemento li q deve ser salva
    const listTarefa = []; //guarda num array

    for(let tarefa of liTarefas) {
        let tarefatxt = tarefa.innerText; //texto do elemento
        tarefatxt = tarefatxt.replace('Apagar', '').trim();
        listTarefa.push(tarefatxt) // add ultimos elementos ao array e guarda la

    }

    const tarefasJson = JSON.stringify(listTarefa); //transforma array em uma especie de variavel
    localStorage.setItem('tarefas', tarefasJson); //guarda valores em aplicacao do navegador

}
function addTarefaSalvas (){
    const tarefas = localStorage.getItem('tarefas');
    const listTarefa = JSON.parse(tarefas); 

    for(let tarefa of listTarefa){
        criaTarefa(tarefa);
    }
}
addTarefaSalvas();