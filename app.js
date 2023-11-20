function InfUno() {
    const alx = document.querySelector('#alx');
    const btns = document.querySelector('#alexa');

    if (alx.style.display == 'block') {
        alx.style.display = 'none';
        btns.innerText = 'Ver más';
    } else {
        alx.style.display = 'block';
        btns.innerText = 'Ver menos';
    }
}

function InfDos() {
    const sml = document.querySelector('#sml');
    const btns = document.querySelector('#samuel');

    if (sml.style.display == 'block') {
        sml.style.display = 'none';
        btns.innerText = 'Ver más';
    } else {
        sml.style.display = 'block';
        btns.innerText = 'Ver menos';
    }
}

function InfTres() {
    const jnj = document.querySelector('#jnj');
    const btns = document.querySelector('#juan');

    if (jnj.style.display == 'block') {
        jnj.style.display = 'none';
        btns.innerText = 'Ver más';
    } else {
        jnj.style.display = 'block';
        btns.innerText = 'Ver menos';
    }
}

const menu = document.querySelector('#menu');
const menua = document.querySelector('#menua')

function mostrar(){
    
    if (menua.style.display == 'none') {
        menua.style.display = 'block';
    } else {
        menua.style.display = 'none';
    } if ( menua.style.display == 'block'){
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}

const equis = document.querySelector('equis')

function cerrar(){
    if ( menua.style.display == 'block'){
        equis.style.display = 'block';
    }
}