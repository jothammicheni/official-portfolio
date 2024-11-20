function createStar() {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.top = Math.random() * window.innerHeight + 'px';
    star.style.left = Math.random() * window.innerWidth + 'px';
    document.body.appendChild(star);
    setTimeout(() => {
        star.remove();
    }, 1500);
}

function createShootingStar() {
    const shootingStar = document.createElement('div');
    shootingStar.className = 'shooting-star';
    shootingStar.style.top = Math.random() * window.innerHeight + 'px';
    shootingStar.style.left = Math.random() * window.innerWidth + 'px';
    document.body.appendChild(shootingStar);
    setTimeout(() => {
        shootingStar.remove();
    }, 1000);
}

setInterval(createStar, 300);
setInterval(createShootingStar, 2000);