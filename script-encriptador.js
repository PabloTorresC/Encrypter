const mensajeEncriptado = document.querySelector(".mensajeEncriptado");

const mensajeDesencriptado = document.querySelector("#mensajeDesencriptado");

//'La letra "e" es convertida para "enter"'
//'La letra "i" es convertida para "imes"'
//'La letra "a" es convertida para "ai"'
//'La letra "o" es convertida para "ober"'
//'La letra "u" es convertida para "ufat"'

function botonEncriptar(){
    const textoEncriptado = encriptar(mensajeEncriptado.value);
    mensajeDesencriptado.value= textoEncriptado
    mensajeEncriptado.value="";
    mensajeDesencriptado.style.backgroundImage = "none"
    
}

function botonDesencriptar(){
    const textoDesencriptado = desencriptar(mensajeDesencriptado.value);
    mensajeEncriptado.value= textoDesencriptado
    mensajeDesencriptado.value="";
   

   mensajeDesencriptado.style.backgroundImage = "url('imagenes/Muñeco.png')"


    
}

function botonCopiar() {
    var desencriptado= document.getElementById("mensajeDesencriptado");

    desencriptado.select(); 
    navigator.clipboard.writeText(desencriptado.value);

    desencriptado.blur();
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i=0; i< matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])


        }

    }
    return stringEncriptada
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i=0; i< matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])


        }

    }
    return stringDesencriptada
}