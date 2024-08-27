const ingresoTexto = document.getElementById("ingresoTexto");
const botonEncriptar = document.getElementById("botonEncriptar");
const botonDesencriptar = document.getElementById("botonDesencriptar");
const botonCopiar = document.getElementById("botonCopiar");
const mensajeFinal = document.getElementById("mensajeFinal");
const muneco = document.getElementById("muneco");
const mensajeInfo2 =document.getElementById("mensajeInfo2");

//e - enter
//o - ober
//i - imes
//a - ai
//u - ufat

let remplazar =[
    ["e", "enter"],
    ["o", "ober"],
    ["i", "imes"],
    ["a", "ai"],
    ["u", "ufat"],
]

const remplace = (nuevoValor) => {
    mensajeFinal.innerHTML = nuevoValor;
    muneco.classList.add("oculto");
    ingresoTexto.value = "";
    mensajeInfo2.style.display = "none";
    botonCopiar.style.display = "block";
    derecha.classList.add("ajustar");
    mensajeFinal.classList.add("ajustar"); 
}

const reset = () => {
    mensajeFinal.innerHTML = "";
    muneco.classList.remove("oculto");
    ingresoTexto.value = "";
    mensajeInfo2.style.display = "block";
    botonCopiar.style.display = "none";
    derecha.classList.remove("ajustar");
    mensajeFinal.classList.remove("ajustar");
    ingresoTexto.focus(); 
}

botonEncriptar.addEventListener("click", ( ) => {
    const texto = ingresoTexto.value.toLocaleLowerCase()
    if(texto != ""){

        function encriptar(newText) {
            for(let i= 0; i < remplazar.length; i++ ){
                if(newText.includes(remplazar[i][0])){
                    newText = newText.replaceAll
                    (remplazar[i][0], remplazar[i][1]);
                };
            };
            return newText
        };
    }else{
        alert("Ingrese el texto a encriptar")
        reset();
    }
       
    remplace(encriptar(texto))

});

botonDesencriptar.addEventListener("click", ( ) => {
    const texto = ingresoTexto.value.toLocaleLowerCase()
    if(texto != ""){
        function desencriptar(newText) {
            for(let i= 0; i < remplazar.length; i++ ){
                if(newText.includes(remplazar[i][1])){
                    newText = newText.replaceAll
                    (remplazar[i][1], remplazar[i][0]);
                };
            };
            return newText
        };
    }else{
        alert("Ingrese el texto a desencriptar")
        reset();
    }
    
    remplace(desencriptar(texto))
});

botonCopiar.addEventListener("click", () => {
    let texto = mensajeFinal;
    //navigator.clipboard.writeText(texto.value);//
    texto.select();
    document.execCommand('copy')
    alert("Texto Copiado");
    reset();

})



