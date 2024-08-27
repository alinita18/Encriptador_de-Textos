const textoPlano = document.querySelector(".texto_plano");
const textoEncriptado = document.querySelector(".texto_encriptado");
const mensajeUno = document.querySelector(".mensajeUno");
const mensajeDos = document.querySelector(".mensajeDos");
const copiar = document.querySelector(".copiar");

function btnEncriptar(){
    if(validaEncriptar(textoPlano.value)){
        const encriptado = encriptar(textoPlano.value);
        textoEncriptado.value = encriptado;
        textoPlano.value = "";
        textoEncriptado.style.backgroundImage = "none";
        mensajeUno.style.visibility = "hidden";
        mensajeDos.style.visibility = "hidden";
        copiar.style.visibility = "visible";
    }    
}

function btnDesencriptar(){
   if(validaDesencriptar(textoEncriptado.value)){
    const desencriptado = desencriptar(textoEncriptado.value);
    textoPlano.value = desencriptado;
    textoEncriptado.value = "";
    textoEncriptado.style.backgroundImage = "url(./assets/Muñeco.png)";
    mensajeUno.style.visibility = "visible";
    mensajeDos.style.visibility = "visible";
    copiar.style.visibility = "hidden";
   }
}


function encriptar(stringEncriptado){    
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptado;
}

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptado;
}
function limpiar(){
    console.log(this.value);
    if(textoEncriptado.value === ""){
        textoEncriptado.style.backgroundImage = "url(./assets/Muñeco.png)";
        mensajeUno.style.visibility = "visible";
        mensajeDos.style.visibility = "visible";
        copiar.style.visibility = "hidden";     
    } else {
        textoEncriptado.style.backgroundImage = "none";
        mensajeUno.style.visibility = "hidden";
        mensajeDos.style.visibility = "hidden";
        copiar.style.visibility = "visible";      
    }
}
function validaEncriptar(texto_plano){
    const regex = /^[A-Z0-9ÁÉÍÓÚÜÑÇÀÈÌÒÙÂÊÎÔÛÄËÏÖÜŸÝ~ªº!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~\s]*$/;
    if(regex.test(texto_plano)){
        alert("El texto a encriptar solo debe contener letras minúsculas, sin acentos ni caracteres especiales");
        return 0;
    }
    return 1;
}
function validaDesencriptar(texto_encriptado){
    const regex = /^[A-Z0-9ÁÉÍÓÚÜÑÇÀÈÌÒÙÂÊÎÔÛÄËÏÖÜŸÝ~ªº!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~\s]*$/;
    if(regex.test(texto_encriptado)){
        alert("El texto a desencriptar solo debe contener letras minúsculas, sin acentos ni caracteres especiales");
        return 0;
    }
    return 1;
}
function btnCopiar() {
    textoEncriptado.select();
    document.execCommand("copy");
  }
  
  
