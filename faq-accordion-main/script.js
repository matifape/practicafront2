const botones = document.querySelectorAll('.boton');

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        const span = boton.closest('.question').querySelector('.oculto');
        const img = boton.querySelector('img'); // Selecciona el ícono dentro del botón

        if (span.classList.contains('visible')) {
            span.classList.remove('visible');
            img.src = "/assets/images/icon-plus.svg"; // Cambia a ícono de "+"
        } else {
            span.classList.add('visible');
            img.src = "/assets/images/icon-minus.svg"; // Cambia a ícono de "-"
        }
    });
});
