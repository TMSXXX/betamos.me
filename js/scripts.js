document.addEventListener('DOMContentLoaded', function() {
    const rainContainer = document.createElement('div');
    rainContainer.id = 'rain';
    document.body.appendChild(rainContainer);

    function createRainDrop() {
        const rainDrop = document.createElement('div');
        rainDrop.className = 'rain-drop';
        rainDrop.style.left = `${Math.random() * 100}vw`;
        rainDrop.style.animationDuration = `${Math.random() * 2 + 2}s`; // 保持动画持续时间的随机性
        rainDrop.style.opacity = Math.random() * 0.3 + 0.1;
        rainContainer.appendChild(rainDrop);

        // 监听动画结束事件
        rainDrop.addEventListener('animationend', function() {
            // 动画结束后移除雨滴
            rainDrop.remove();
        });
    }

    setInterval(createRainDrop, 100); // 保持雨滴生成的频率不变
});