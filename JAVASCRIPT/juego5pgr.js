let hardwareImagenes = [
    "IMAGES/Intel_80486DX2_bottom.jpg",        
    "IMAGES/tecno-partes-ram-ddr5.jpg",        
    "IMAGES/Tecno-partes-tarjeta-de-video-1.jpg",     
    "IMAGES/samsung-860-evo-review08.jpg",        
    "IMAGES/pexels-athena-2582935.jpg" 
];

let correcta = [0, 1, 2, 0, 1];
let opciones = [
    ["CPU", "Fuente de Poder", "Monitor"],
    ["Memoria RAM", "Placa Base", "Disco Duro"],
    ["Tarjeta Gráfica", "Teclado", "Router"],
    ["SSD", "Monitor", "Mouse"],
    ["Fuente de Poder", "Placa Base", "Tarjeta de Red"]
];
let posActual = 0;
let cantidadAcertadas = 0;
let tiempoRestante = 10;
let temporizador;

function comenzarJuego() {
    posActual = 0;
    cantidadAcertadas = 0;
    document.getElementById('pantalla-inicial').style.display = 'none';
    document.getElementById('pantalla-final').style.display = 'none';
    document.getElementById('pantalla-juego').style.display = 'block';
    cargarPregunta();
    comenzarTemporizador();
}

function cargarPregunta() {
    document.getElementById("imgBandera").src = hardwareImagenes[posActual];
    document.getElementById("n0").innerHTML = opciones[posActual][0];
    document.getElementById("n1").innerHTML = opciones[posActual][1];
    document.getElementById("n2").innerHTML = opciones[posActual][2];
}

function comprobarRespuesta(eleccion) {
    if (eleccion === correcta[posActual]) {
        document.getElementById('n' + eleccion).classList.add('nombreAcertada');
        document.getElementById('l' + eleccion).classList.add('letraAcertada');
        cantidadAcertadas++;
    } else {
        document.getElementById('n' + eleccion).classList.add('nombreNoAcertada');
        document.getElementById('l' + eleccion).classList.add('letraNoAcertada');
    }
    posActual++;
    setTimeout(() => {
        limpiarOpciones();
        if (posActual < hardwareImagenes.length) {
            cargarPregunta();
        } else {
            terminarJuego();
        }
    }, 1000);
}

function limpiarOpciones() {
    document.querySelectorAll('.nombre').forEach(el => {
        el.classList.remove('nombreAcertada', 'nombreNoAcertada');
    });
    document.querySelectorAll('.letra').forEach(el => {
        el.classList.remove('letraAcertada', 'letraNoAcertada');
    });
}

function comenzarTemporizador() {
    tiempoRestante = 10;
    document.getElementById('temporizador').textContent = tiempoRestante;
    temporizador = setInterval(() => {
        tiempoRestante--;
        document.getElementById('temporizador').textContent = tiempoRestante;
        if (tiempoRestante === 0) {
            clearInterval(temporizador);
            terminarJuego();
        }
    }, 1000);
}

function terminarJuego() {
    document.getElementById('pantalla-juego').style.display = 'none';
    document.getElementById('pantalla-final').style.display = 'block';
    document.getElementById('numCorrectas').textContent = cantidadAcertadas;
    document.getElementById('numIncorrectas').textContent = hardwareImagenes.length - cantidadAcertadas;
}

function volverAlInicio() {
    document.getElementById('pantalla-inicial').style.display = 'block';
    document.getElementById('pantalla-final').style.display = 'none';
}
