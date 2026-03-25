const puntero = document.getElementById('puntero');
const anilloPuntero = document.getElementById('anillo-puntero');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    puntero.style.left = mx + 'px';
    puntero.style.top = my + 'px';
});

function animarAnillo() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    anilloPuntero.style.left = rx + 'px';
    anilloPuntero.style.top = ry + 'px';
    requestAnimationFrame(animarAnillo);
}
animarAnillo();

const barraNav = document.getElementById('barra-nav');
window.addEventListener('scroll', () => {
    barraNav.classList.toggle('con-fondo', window.scrollY > 40);
});

const elementos = document.querySelectorAll('.aparece');
const observador = new IntersectionObserver(entradas => {
    entradas.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); }
    });
}, { threshold: 0.1 });
elementos.forEach(el => observador.observe(el));

setTimeout(() => {
    document.querySelectorAll('#inicio .aparece').forEach(el => el.classList.add('visible'));
}, 100);

const correo = 'danielmarin092006@gmail.com';
const botonContacto = document.querySelector('.contacto .boton-secundario');
const desplegable = document.querySelector('.desplegable');

botonContacto.addEventListener('click', e => {
    e.preventDefault();
    navigator.clipboard.writeText(correo).then(() => {
        const textoOriginal = desplegable.textContent;
        desplegable.textContent = 'Correo copiado!';
        desplegable.style.opacity = '1';
        desplegable.style.transform = 'translateX(-50%) translateY(0)';
        setTimeout(() => {
            desplegable.textContent = textoOriginal;
            desplegable.style.opacity = '';
            desplegable.style.transform = '';
        }, 2000);
    });
});