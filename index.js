const texto = document.getElementById("texto");
const buttonEncriptar = document.getElementById("buttonEncriptar");
const buttonDesencriptar = document.getElementById("buttonDesencriptar");
const buttonCopiar = document.getElementById("buttonCopiar");
const parrafo1 = document.getElementById("parrafo1");
const buscador = document.getElementById("buscador");
const parrafo2 = document.getElementById("parrafo2");

// e - enter
// o - ober
// i - imes
// a - ai
// u - ufat

const remplazar = [
    ["e", "enter"],
    ["o", "ober"],
    ["i", "imes"],
    ["a", "ai"],
    ["u", "ufat"]
];

function encriptar() {
    const textoOriginal = texto.value.toLowerCase();
    let textoEncriptado = textoOriginal;
    for (let i = 0; i < remplazar.length; i++) {
        textoEncriptado = textoEncriptado.replaceAll(remplazar[i][0], remplazar[i][1]);
    }
    mostrarTextoEncriptado(textoEncriptado);
}

function desencriptar() {
    const textoEncriptado = texto.value.toLowerCase();
    let textoDesencriptado = textoEncriptado;
    for (let i = 0; i < remplazar.length; i++) {
        textoDesencriptado = textoDesencriptado.replaceAll(remplazar[i][1], remplazar[i][0]);
    }
    mostrarTextoEncriptado(textoDesencriptado);
}

function mostrarTextoEncriptado(texto) {
    parrafo1.innerHTML = texto;
    Buscador.style.display = "none";
    parrafo2.style.display = "none";
    buttonCopiar.style.display = "block";
}

buttonEncriptar.addEventListener("click", encriptar);
buttonDesencriptar.addEventListener("click", desencriptar);

buttonCopiar.addEventListener("click", () => {
    navigator.clipboard.writeText(parrafo1.innerText).then(() => {
        alert("Texto copiado al portapapeles");
    });
});

texto.addEventListener("input", () => {
    buttonCopiar.style.display = "none";
    buscador.style.display = "block";
    parrafo2.style.display = "block";
    parrafo1.innerHTML = "Ningún mensaje fue encontrado";
});
