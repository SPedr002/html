document.addEventListener('DOMContentLoaded', function() {
    const inputTextarea = document.getElementById('input');
    const outputTextarea = document.getElementById('output');
    const outputImage = document.getElementById('outputImage');
    const outputTitle = document.getElementById('outputTitle');
    const outputMessage = document.getElementById('outputMessage');
    const copiarButton = document.getElementById('copiar');

    const encriptar = () => {
        const texto = inputTextarea.value.trim();
        if (texto && validarInput(texto)) {
            const textoCriptografado = texto
                .replace(/e/g, "enter")
                .replace(/i/g, "imes")
                .replace(/a/g, "ai")
                .replace(/o/g, "ober")
                .replace(/u/g, "ufat");
            outputTextarea.value = textoCriptografado;
            toggleOutput();
        }
        else{
            toggleOutputNone();
        }
    };

    const desencriptar = () => {
        const texto = inputTextarea.value.trim();
        if (texto && validarInput(texto)) {
            const textoDescriptografado = texto
                .replace(/enter/g, "e")
                .replace(/imes/g, "i")
                .replace(/ai/g, "a")
                .replace(/ober/g, "o")
                .replace(/ufat/g, "u");
            outputTextarea.value = textoDescriptografado;
            toggleOutput();
        }
        else{
            toggleOutputNone();
        }
    };

    const toggleOutputNone = ()=> {
        outputImage.style.display = 'block';
        outputTitle.style.display = 'block';
        outputMessage.style.display = 'block';
        outputTextarea.style.display = 'none';
        copiarButton.style.display = 'none';
        outputTextarea.disabled = true;
        copiarButton.disabled = true;
    };

    const copiarTextoParaTransferencia = () => {
        outputTextarea.select();
        document.execCommand('copy');
    };

    const toggleOutput = ()=>{
        outputImage.style.display = 'none';
        outputTitle.style.display = 'none';
        outputMessage.style.display = 'none';
        outputTextarea.style.display = 'block';
        copiarButton.style.display = 'block';
        outputTextarea.disabled = false;
        copiarButton.disabled = false;
    }
   
    window.encriptar = encriptar;
    window.desencriptar = desencriptar;
    window.copiarTextoParaTransferencia = copiarTextoParaTransferencia;
});
function validarInput(input) {
    
    const regex = /^[a-z0-9 .,!?'-]*$/;
    return regex.test(input);
  } 