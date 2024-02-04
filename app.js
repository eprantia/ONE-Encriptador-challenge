var msn = document.getElementsByClassName('divOutputMsn');
var outputTxt = document.getElementsByClassName('divOutputTxt');
// var btnCopy = document.getElementsByClassName('divBtnCopy');

var txtOutput = '';
var txtLimpio = '';

var txtInput = '';


function encriptar(){
    txtLimpio = cleanTxt();
    txtOutput = '';
    txtOutput = txtLimpio.replace(/e/g, 'enter');
    txtOutput = txtOutput.replace(/i/g, 'imes');
    txtOutput = txtOutput.replace(/a/g, 'ai');
    txtOutput = txtOutput.replace(/o/g, 'ober');    
    txtOutput = txtOutput.replace(/u/g, 'ufat');
   
    console.log(txtOutput);
    printTxt(txtOutput);
}

function desencriptar(){
    txtLimpio = cleanTxt();
    txtOutput = '';
    txtOutput = txtLimpio.replace(/enter/g, 'e'); 
    txtOutput = txtOutput.replace(/imes/g, 'i');
    txtOutput = txtOutput.replace(/ai/g, 'a');
    txtOutput = txtOutput.replace(/ober/g, 'o');    
    txtOutput = txtOutput.replace(/ufat/g, 'u');
   
    console.log(txtOutput);
    printTxt(txtOutput);
}

function cleanTxt(){
    txtInput = document.getElementById("inputTxt").value;
    txtInput = eliminarDiacriticos(txtInput);
    txtInput = txtInput.toLowerCase();
    return txtInput;
}

// Elimina los diacríticos de un texto (ES6)
function eliminarDiacriticos(texto) {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g,"");
}

function printTxt(text){
    if (text == '') {
        alert('Primero ingresa algun texto!');
    }else{
        showOutput();
        document.getElementById('outputTxt').innerHTML = text;
    }
}

function showOutput(){
    msn[0].style.display = 'none';
    outputTxt[0].style.display = 'block';
}

function showMsn(){
    msn[0].style.display = 'block';
    outputTxt[0].style.display = 'none';
}

function copyTxt() {
    navigator['clipboard'].writeText(document.getElementById('outputTxt').innerHTML).then(function() {
        console.log('Async: Copying to clipboard was successful!');
      }, function(err) {
        console.error('Async: Could not copy text: ', err);
      });
    init();
}

function init(){
    showMsn();
    document.getElementById("inputTxt").value='';
}

init();
