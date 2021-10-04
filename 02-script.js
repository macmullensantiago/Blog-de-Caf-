// querySelector
const heading = document.querySelector('.header__texto') // 0 a 1 Elementos
heading.textContent = 'Nuevo Heading';
console.log(heading);

// querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a');
enlaces[0].textContent = 'Nuevo Texto para Enlace';
enlaces[0].classList.add('nueva-clase');
// enlaces[0].classList.remove('navegacion__enlace');

// Generar un nuevo enlace
const nuevoEnlace = document.createElement('A')

// Agregar el href
nuevoEnlace.href = 'nuevo-enlace.html';

// Agregar el texto
nuevoEnlace.textContent = 'Tienda Virtual';

// agregar la clase
nuevoEnlace.classList.add('navegacion__enlace');

// Agregarlo al Documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace);

// Eventos

console.log(1);


window.addEventListener('load', function() { // load espera a que el JS y los archivos dependan del HTML estén listos
    console.log(2);

});

window.onload = function() {
    console.log(3);
}

document.addEventListener('DOMContentLoaded', function() { // Solo espera por el HTML, pero no espera CSS o imágenes
    console.log(4);
});


console.log(5);

window.onscroll = function(evento) {
    console.log(evento);
}

// Seleccionar elementos y asociarles un evento

const btnEnviar = document.querySelector('.boton--primario');
btnEnviar.addEventListener('click', function(evento) {
    console.log(evento);
    evento.preventDefault();

    // Validar un formulario

    console.log('enviando formulario');

});



// Eventos de los Inputs y Textarea

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

// El Evento de Submit
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    console.log('Enviando Formulario');


    // Validar el formulario

    const { nombre, email, mensaje } = datos;

    if(nombre === '' || email === '' || mensaje === '') {
        mostrarError('Todos los campos son obligatorios')

        return; // Corta la ejecución del código
    }
   
    // Crear la alerta de Enviar correctamente
    mostrarMensaje('Mensaje enviado correctamente');
});

function leerTexto(e) {
    // console.log(e.target.value);
    datos[e.target.id] = e.target.value;

    // console.log(datos);
}

function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElemente('P');
    alerta.textContent = mensaje;

    if(error) {
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto');
    }

    formulario.appendChild(alerta);
    
    // desaparezca después de 5 segundos
    setTimeout(() => {
         alerta.remove();
    }, 5000);
}
    
    // Enviar el formulario

    console.log('Enviando Formulario');
});

function leerTexto(e) {
    // console.log(e.target.value);
    datos[e.target.id] = e.target.value;

   // console.log(datos);
}
