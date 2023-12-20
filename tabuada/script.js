function tabuada(){
    var num = document.getElementById('txtnum') //num = valor do campo txtnum
    var tab = document.getElementById('seltab') //tab ira retornar um valor para o usuario com os resultados da tabuada dentro da div
    if(num.value.length == 0){ //se for igual a 0 digitar outro numero
        window.alert('por favor digite um numero')

    }else{
        var n = Number (num.value)
        var c = 1
        tab.innerHTML =''
        while(c <= 10){
            var item = document.createElement('option')//cria uma option dentro do html atravez do js
            item.text = `${n} x ${c} =${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}