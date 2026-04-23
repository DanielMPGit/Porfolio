const palabras = [
    { texto: "Desarrollador DAM", color: "#00ffcc" },
    { texto: "Técnico de Sistemas", color: "#ff6b6b" },
    { texto: "Full Stack Junior", color: "#4dabf7" }
];

let palabraActual = 0;
let index = 0;
let escribiendo = true;
let esperando = false;

const velocidad = 50;
const pausa = 800;

function animar() {
    const elemento = document.querySelector(".highlight");
    const palabra = palabras[palabraActual];

    elemento.style.setProperty("--color", palabra.color);

    if (esperando) return;

    if (escribiendo) {
        elemento.textContent = palabra.texto.slice(0, index);
        index++;

        if (index > palabra.texto.length) {
            esperando = true;
            setTimeout(() => {
                escribiendo = false;
                esperando = false;
            }, pausa);
        }
    } else {
        elemento.textContent = palabra.texto.slice(0, index);
        index--;

        if (index < 0) {
            escribiendo = true;
            index = 0;
            palabraActual = (palabraActual + 1) % palabras.length;
        }
    }
}
setInterval(animar, velocidad);