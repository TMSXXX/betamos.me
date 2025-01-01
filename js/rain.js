document.addEventListener('DOMContentLoaded', function() {
    const rainContainer = document.createElement('div');
    rainContainer.id = 'rain';
    document.body.appendChild(rainContainer);

    function createRainDrop() {
        const rainDrop = document.createElement('div');
        rainDrop.className = 'rain-drop';
        rainDrop.style.left = `${Math.random() * 100}%`;
        rainDrop.style.animationDuration = `${Math.random() * 0.5 + 0.5}s`;
        rainContainer.appendChild(rainDrop);

        setTimeout(() => {
            rainDrop.remove();
        }, 1000);
    }

    setInterval(createRainDrop, 100);
});