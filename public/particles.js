window.addEventListener("load", () => {
    const canvas = document.getElementById("particlesCanvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let particles = Array.from({ length: 80 }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: Math.random() * 2 + 1,
        d: Math.random() * 1 + 0.5
    }));

    function draw() {
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        ctx.fillStyle = "#FFD700";
        particles.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fill();
        });
        update();
    }

    function update() {
        particles.forEach(p => {
            p.y += p.d;
            if (p.y > window.innerHeight) {
                p.y = 0;
                p.x = Math.random() * window.innerWidth;
            }
        });
    }

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    function animate() {
        draw();
        requestAnimationFrame(animate);
    }
    animate();
});