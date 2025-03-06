document.getElementById('playButton').addEventListener('click', function () {
    const audio = document.getElementById('song');
    audio.volume = 1;
    audio.play(); // Воспроизвести песню

    // Плавное исчезновение кнопки
    this.style.opacity = '0';
    setTimeout(() => {
        this.style.display = 'none';
    }, 500); // Задержка для плавного исчезновения
});