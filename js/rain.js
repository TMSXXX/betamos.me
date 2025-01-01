const canvas = document.createElement('canvas');
canvas.id = 'rainCanvas';
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');
const raindrops = [];

function createRain() {
    const x = Math.random() * (window.innerWidth + Math.tan(15 * Math.PI / 180) * window.innerWidth);
    const scale = Math.random() * 0.8 + 0.2;
    const height = 80 * scale;
    const opacity = scale * 0.2 + 0.15;
    const speed = 25 / ((1 - scale) * 0.6 + 0.3);

    raindrops.push({ x, y: -height, height, opacity, speed });
}

function updateRain() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    raindrops.forEach((drop, index) => {
        drop.x += Math.tan(-15 * Math.PI / 180) * drop.speed;
        drop.y += drop.speed;
        if (drop.y > canvas.height) {
            raindrops.splice(index, 1);
        } else {
            ctx.beginPath();
            const gradient = ctx.createLinearGradient(0, drop.y, 0, drop.y + drop.height);
            gradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
            gradient.addColorStop(1, `rgba(255, 255, 255, ${drop.opacity})`);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1;
            ctx.moveTo(drop.x, drop.y);
            ctx.lineTo(drop.x + Math.tan(-15 * Math.PI / 180) * drop.height, drop.y + drop.height);
            ctx.stroke();
        }
    });
}

function addRainDrops() {
    for (let i = 0; i < 4; i++) {
        createRain();
    }
}

setInterval(addRainDrops, Math.floor(window.innerWidth / 400));
function animate() {
    updateRain();
    requestAnimationFrame(animate);
}

animate();