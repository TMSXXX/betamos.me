function createRain() {
    const rain = document.createElement('div');
    rain.classList.add('rain');
    
    rain.style.left = Math.floor(Math.random() * (window.innerWidth + Math.tan(15 * Math.PI / 180) * window.innerWidth)) + 'px';
    // rain.style.left = Math.floor(Math.random() * (window.innerWidth)) + 'px';
    // rain.style.top = Math.floor(Math.random() * (window.innerHeight)) + 'px';
    
    const scale = Math.random() * 0.8 + 0.2;
    const duration = (1 - scale) * 0.6 + 0.3;
    
    rain.style.height = `calc(80px * ${scale})`;
    rain.style.animationDuration = `${duration}s`;
    rain.style.opacity = scale * 0.1 + 0.15;
    
    document.getElementById("bgrain").appendChild(rain);
    
    setTimeout(() => {
        rain.remove();
    }, duration * 1000);
}

var bgrain = document.createElement("div");
bgrain.id = "bgrain";
document.body.insertBefore(bgrain, document.body.firstChild);

setInterval(() => { for(var i = 0; i < 4; i++) createRain(); }, Math.floor(window.innerWidth / 400));