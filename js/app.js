//Variables para sumar
var operandoa;
var operandob;
var operacion;

function init() {
    var display = document.getElementById('display');
    var on = document.getElementById('on');
    var dividido = document.getElementById('dividido');
    var siete = document.getElementById('7');
    var ocho = document.getElementById('8');
    var nueve = document.getElementById('9');
    var por = document.getElementById('por');
    var cuatro = document.getElementById('4');
    var cinco = document.getElementById('5');
    var seis = document.getElementById('6');
    var menos = document.getElementById('menos');
    var uno = document.getElementById('1');
    var dos = document.getElementById('2');
    var tres = document.getElementById('3');
    var cero = document.getElementById('0');
    var punto = document.getElementById('punto');
    var igual = document.getElementById('igual');
    var mas = document.getElementById('mas');
    var sign = document.getElementById('sign');


    //Eventos de click

    uno.onclick = function (e) {
        display.textContent = display.textContent + '1';
        if(display.textContent.length>=9){
            display.textContent=display.textContent='';
        }
    }
    dos.onclick = function (e) {
        display.textContent = display.textContent + '2';
        if(display.textContent.length>=9){
            display.textContent=display.textContent='';
        }
    }
    tres.onclick = function (e) {
        display.textContent = display.textContent + '3';
        if(display.textContent.length>=9){
            display.textContent=display.textContent='';
        }
    }
    cuatro.onclick = function (e) {
        display.textContent = display.textContent + '4';
        if(display.textContent.length>=9){
            display.textContent=display.textContent='';
        }
    }
    cinco.onclick = function (e) {
        display.textContent = display.textContent + '5';
        if(display.textContent.length>=9){
            display.textContent=display.textContent='';
        }
    }
    seis.onclick = function (e) {
        display.textContent = display.textContent + '6';
        if(display.textContent.length>=9){
            display.textContent=display.textContent='';
        }
    }
    siete.onclick = function (e) {
        display.textContent = display.textContent + '7';
        if(display.textContent.length>=9){
            display.textContent=display.textContent='';
        }
    }
    ocho.onclick = function (e) {
        display.textContent = display.textContent + '8';
        if(display.textContent.length>=9){
            display.textContent=display.textContent='';
        }
    }
    nueve.onclick = function (e) {
        display.textContent = display.textContent + '9';
        if(display.textContent.length>=9){
            display.textContent=display.textContent='';
        }
    }
    cero.onclick = function (e) {
        display.textContent = display.textContent + '0';
        if(display.textContent.length>=9){
            display.textContent=display.textContent='';
        }
    }
    punto.onclick = function (e) {
        display.textContent = display.textContent + '.';
    }
    sign.onclick = function (e) {
        display.textContent = display.textContent + '-';
    }
    dividido.onclick = function (e) {
        display.textContent = display.textContent + '*';
    }
    por.onclick = function (e) {
        display.textContent = display.textContent + '/';
    }

    on.onclick = function (e) {
        resetear();
    }
    mas.onclick = function (e) {
        operandoa = display.textContent;
        operacion = '+';
        limpiar();
    }
    menos.onclick = function (e) {
        operandoa = display.textContent;
        operacion = '-';
        limpiar();
    }
    por.onclick = function (e) {
        operandoa = display.textContent;
        operacion = '*';
        limpiar();
    }
    dividido.onclick = function (e) {
        operandoa = display.textContent;
        operacion = '/';
        limpiar();
    }
    igual.onclick = function (e) {
        operandob = display.textContent;
        resolver();
        
    }

}
//limpia la pantalla de la calculadora
function limpiar() {
    display.textContent = '';
}

function resetear() {
    display.textContent = '';
    operandoa = 0;
    operandob = 0;
    operacion = '';
}
//Código para resolver suma, resta, multiplicación y división
function resolver() {
    var res = 0;
    switch (operacion) {
        case '+':
            res = parseFloat(operandoa) + parseFloat(operandob);
            break;
        case '-':
            res = parseFloat(operandoa) - parseFloat(operandob);
            break;
        case '*':
            res = parseFloat(operandoa) * parseFloat(operandob);
            break;
        case '/':
            res = parseFloat(operandoa) / parseFloat(operandob);
            break;
    }
    resetear();
    display.textContent = res;
}


