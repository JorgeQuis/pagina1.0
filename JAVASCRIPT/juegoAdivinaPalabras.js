let arrayPalabras = ["JAVASCRIPT", "TECLADO", "MONITOR", "COMPUTADORA", "MOUSE"];
let ayudas = [
    "Un lenguaje de programación.",
    "Un dispositivo usado para escribir.",
    "La pantalla de una computadora.",
    "Otra palabra para llamar a una PC.",
    "Un dispositivo usado para apuntar."
];
let cantPalabrasJugadas = 0;
let intentosRestantes = 5;
let posActual;
let arrayPalabraActual = [];
let cantidadAcertadas = 0;
let divsPalabraActual = [];
let totalQueDebeAcertar;

function cargarNuevaPalabra() {
    cantPalabrasJugadas++;
    if (cantPalabrasJugadas > arrayPalabras.length) {
        cantPalabrasJugadas = 1; // Reset to start
    }
    
    posActual = Math.floor(Math.random() * arrayPalabras.length);
    let palabra = arrayPalabras[posActual];
    totalQueDebeAcertar = palabra.length;
    cantidadAcertadas = 0;

    arrayPalabraActual = palabra.split('');
    const palabraDiv = document.querySelector('.cuerpo #palabra');
    palabraDiv.innerHTML = "";  // Reset for the new word
    document.querySelector('.cuerpo #letrasIngresadas').innerHTML = "";

    // Create letters
    for (let i = 0; i < palabra.length; i++) {
        var divLetra = document.createElement("div");
        divLetra.className = "letra";
        palabraDiv.appendChild(divLetra);
    }

    divsPalabraActual = document.querySelectorAll('.cuerpo .letra');
    intentosRestantes = 5;
    document.querySelector('.cuerpo #intentos').innerHTML = intentosRestantes;
    document.querySelector('.cuerpo #ayuda').innerHTML = ayudas[posActual];

    arrayPalabras.splice(posActual, 1); // Remove used word
    ayudas.splice(posActual, 1);
}

document.addEventListener("keydown", event => {
    if (isLetter(event.key)) {
        let letrasIngresadas = document.querySelector('.cuerpo #letrasIngresadas').innerHTML;
        letrasIngresadas = letrasIngresadas.split('');
        if (letrasIngresadas.lastIndexOf(event.key.toUpperCase()) === -1) {
            let acerto = false;
            for (let i = 0; i < arrayPalabraActual.length; i++) {
                if (arrayPalabraActual[i] === event.key.toUpperCase()) {
                    divsPalabraActual[i].innerHTML = event.key.toUpperCase();
                    acerto = true;
                    cantidadAcertadas++;
                }
            }
            if (acerto) {
                if (totalQueDebeAcertar === cantidadAcertadas) {
                    for (let i = 0; i < arrayPalabraActual.length; i++) {
                        divsPalabraActual[i].className = "letra pintar";
                    }
                }
            } else {
                intentosRestantes--;
                document.querySelector('.cuerpo #intentos').innerHTML = intentosRestantes;
                if (intentosRestantes <= 0) {
                    for (let i = 0; i < arrayPalabraActual.length; i++) {
                        divsPalabraActual[i].className = "letra pintarError";
                    }
                }
            }
            document.querySelector('.cuerpo #letrasIngresadas').innerHTML += event.key.toUpperCase() + " - ";
        }
    }
});

function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
}

cargarNuevaPalabra();
