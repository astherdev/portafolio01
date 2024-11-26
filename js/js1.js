
function mostrarOcultarMenu() {
    const nav = document.getElementById('nav'); // Obtiene el elemento de navegación por su ID
    const button = document.querySelector('.abrir-menu'); // Obtiene el botón del menú por su clase

    if (nav.classList.contains('visible')) { 
        nav.classList.remove('visible'); // Oculta el menú removiendo la clase 'visible'
        button.innerHTML = '≣'; 
    } else {
        nav.classList.add('visible'); // Muestra el menú agregando la clase 'visible'
        button.innerHTML = '✖'; 
    }
}

function validarFormulario() {
    const correo = document.getElementById('correo').value; 

    if (!correo.includes('@')) {
        alert('Por favor, ingresa un correo electrónico válido.'); 
        return false; // Impide que el formulario se envíe
    }

    return true; // Permite que el formulario se envíe si el correo es válido
}

document.querySelectorAll('.project-image').forEach(function(image) {
    image.addEventListener('click', function() {
        // Añade un evento de clic a cada imagen
        let Info2 = this.nextElementSibling; 
        // Encuentra el siguiente elemento hermano que contiene la información del proyecto

        if (Info2 && Info2.classList.contains('info2')) {
            Info2.classList.toggle('active'); 
            // Alterna la clase 'active' para mostrar u ocultar la información del proyecto
        }
    });
});
