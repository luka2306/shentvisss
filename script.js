document.addEventListener('DOMContentLoaded', function() {
    var noLoveBtn = document.getElementById('no-love-btn');
    var loveBtn = document.getElementById('love-btn');
    var clickCount = 0;

    function handleClick() {
        clickCount++;
        switch(clickCount) {
            case 1:
                noLoveBtn.textContent = "Text 1";
                break;
            case 2:
                noLoveBtn.textContent = "Text 2";
                break;
            case 3:
                noLoveBtn.textContent = "Text 3";
                break;
            case 4:
                noLoveBtn.textContent = "Text 4";
                break;
            case 5: 
                noLoveBtn.textContent = "Text 5";
                break;
            case 6:
                noLoveBtn.textContent = "Text 6";
                break;
            case 7:
                noLoveBtn.style.display = 'none';
                break;
            default:
                noLoveBtn.textContent = "არა";
                clickCount = 0;
        }

        // Увеличение размера .btn1
        var computedStyle = window.getComputedStyle(loveBtn);
        var fontSize = parseInt(computedStyle.getPropertyValue('font-size'));
        loveBtn.style.fontSize = (fontSize + 10) + 'px';
        loveBtn.classList.add('animate__pulse');
    }

    noLoveBtn.addEventListener('click', handleClick);

    loveBtn.addEventListener('click', function() {
        var mainText = document.getElementById('main-text');
        mainText.textContent = 'პასუხი ბოლო Text-ზე';
        mainText.style.fontSize = '36px';
        mainText.classList.add('animate__fadeIn');
        loveBtn.style.display = 'none';
        noLoveBtn.style.display = 'none';

        // Инициализация фейерверков
        var firework = new Fireworks({
            target: 'fireworks-container', // Идентификатор вашего контейнера
            texture: {
                src: 'path/to/your/firework-texture.png', // Путь к текстуре фейерверков
                radius: 3, // Радиус фейерверков
                number: 120 // Количество фейерверков
            },
            colors: ['#ff69b4', '#00ffff', '#ffff00'] // Массив цветов для фейерверков
        });

        // Запуск фейерверков
        firework.start();
    });
});
