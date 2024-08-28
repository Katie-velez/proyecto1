function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function ocultarElementos(){
    document.getElementById("munheco").style.display = "none";
    document.getElementById("informacion").style.display = "none";
    document.getElementById("botonCopiar").style.display = "block";
}

// Función para encriptar el texto
function encriptarTexto() {
    let textoEncriptado = document.getElementById('textoIngresado').value;
    textoEncriptado = textoEncriptado.replace(/e/g, 'enter');
    textoEncriptado = textoEncriptado.replace(/i/g, 'imes');
    textoEncriptado = textoEncriptado.replace(/a/g, 'ai');
    textoEncriptado = textoEncriptado.replace(/o/g, 'ober');
    textoEncriptado = textoEncriptado.replace(/u/g, 'ufat');
    ocultarElementos();
    asignarTextoElemento('textarea',textoEncriptado);
    return;
}
   


// Función para desencriptar texto
function desencriptarTexto() {
    let textoDesencriptado = document.getElementById('textoIngresado').value;
    textoDesencriptado = textoDesencriptado.replace(/enter/g, 'e');
    textoDesencriptado = textoDesencriptado.replace(/imes/g, 'i');
    textoDesencriptado = textoDesencriptado.replace(/ai/g, 'a');
    textoDesencriptado = textoDesencriptado.replace(/ober/g, 'o');
    textoDesencriptado = textoDesencriptado.replace(/ufat/g, 'u');
    ocultarElementos();
    asignarTextoElemento('textarea',textoDesencriptado);
    return;
}

function copiarTexto() {
    const texto = document.getElementById('texto').innerText;
     navigator.clipboard.writeText(texto);

}