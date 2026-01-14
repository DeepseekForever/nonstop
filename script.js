// Простой скрипт для сайта

document.addEventListener('DOMContentLoaded', function() {
    console.log('Сайт DeepseekNon-stop загружен');
    
    // Подсветка активной ссылки
    const currentPage = window.location.pathname.split('/').pop();
    const links = document.querySelectorAll('.nav-link');
    
    links.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
    
    // Простая анимация для аудиоплеера
    const audioPlayer = document.querySelector('audio');
    if (audioPlayer) {
        audioPlayer.addEventListener('play', function() {
            console.log('Трек запущен');
        });
        
        audioPlayer.addEventListener('ended', function() {
            console.log('Трек завершен');
        });
    }
    
    // Анимация появления элементов
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.1}s`;
    });
});