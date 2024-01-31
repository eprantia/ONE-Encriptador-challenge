    // Elimina los diacríticos de un texto (ES6)
function eliminarDiacriticos(texto) {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g,"");
}

function encriptar(){
    let txtOutput = '';
    let txtInput = cleanTxt();

    txtOutput = txtInput.replace(/e/g, 'enter');
    txtOutput = txtOutput.replace(/i/g, 'imes');
    txtOutput = txtOutput.replace(/a/g, 'ai');
    txtOutput = txtOutput.replace(/o/g, 'ober');    
    txtOutput = txtOutput.replace(/u/g, 'ufat');
   
    console.log(txtOutput);
    printTxt(txtOutput);
}

function desencriptar(){
    let txtOutput = '';
    let txtInput = cleanTxt();

    txtOutput = txtInput.replace(/enter/g, 'e'); 
    txtOutput = txtOutput.replace(/imes/g, 'i');
    txtOutput = txtOutput.replace(/ai/g, 'a');
    txtOutput = txtOutput.replace(/ober/g, 'o');    
    txtOutput = txtOutput.replace(/ufat/g, 'u');
   
    console.log(txtOutput);
    printTxt(txtOutput);
}

function cleanTxt(){
    let txtInput = document.getElementById("txtInput").value;
    txtInput = eliminarDiacriticos(txtInput);
    txtInput = txtInput.toLowerCase();
    return txtInput;
}

function printTxt(text){
    document.getElementById('txtOutput').value = text;
}

function copyTxt(params) {
    navigator.clipboard.writeText(document.getElementById('txtOutput').value).then(function() {
        console.log('Async: Copying to clipboard was successful!');
      }, function(err) {
        console.error('Async: Could not copy text: ', err);
      });
}
