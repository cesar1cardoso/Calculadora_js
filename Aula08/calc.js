
const display = document.getElementById('resultado')

function InserirDisplay(valor){
display.value += valor
}

function LimparDisplay(){
    display.value =""
}

function calcular(){
    display.value = eval(display.value)

}
