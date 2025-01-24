document.addEventListener('wheel', function(event) {
    // Impede o comportamento padrão de rolagem
    event.preventDefault();

    // Ajusta a rolagem da página com base na direção da roda do mouse
    window.scrollBy({
        top: event.deltaY,
        left: 0,
        behavior: 'smooth'
    });
});