document.getElementById('playButton').addEventListener('click', function () {
    const audio = document.getElementById('song');
    audio.play(); // Воспроизвести песню

    // Скрыть кнопку после нажатия
    this.style.opacity = '0';
    setTimeout(() => {
        this.style.display = 'none';
    }, 500); // Задержка для плавного исчезновения
});
