// heroAnimation.js

export function initHeroAnimation(containerSelector, heroSelector, svgPath = '/assets/hero-bg-elements/', svgCount = 25) {
    const container = document.querySelector(containerSelector);
    const hero = document.querySelector(heroSelector);
  
    if (!container || !hero) {
      console.warn('Container or hero element not found.');
      return;
    }
  
    let heroRect = hero.getBoundingClientRect();
  
    // Update hero size on resize
    window.addEventListener('resize', () => {
      heroRect = hero.getBoundingClientRect();
    });
  
    const svgs = [];
  
    for (let i = 1; i <= svgCount; i++) {
      const img = document.createElement('img');
      img.src = `${svgPath}svg${i}.svg`;
      img.className = 'floating-svg';
      container.appendChild(img);
  
      svgs.push({
        el: img,
        x: Math.random() * hero.offsetWidth,
        y: Math.random() * hero.offsetHeight,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        angle: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 1
      });
    }
  
    function animate() {
      svgs.forEach(obj => {
        const w = hero.offsetWidth;
        const h = hero.offsetHeight;
        const size = 40;
  
        obj.x += obj.vx;
        obj.y += obj.vy;
        obj.angle += obj.rotationSpeed;
  
        // Bounce inside hero section
        if (obj.x <= 0 || obj.x >= w - size) obj.vx *= -1;
        if (obj.y <= 0 || obj.y >= h - size) obj.vy *= -1;
  
        obj.x = Math.min(Math.max(obj.x, 0), w - size);
        obj.y = Math.min(Math.max(obj.y, 0), h - size);
  
        obj.el.style.transform = `translate(${obj.x}px, ${obj.y}px) rotate(${obj.angle}deg)`;
      });
  
      requestAnimationFrame(animate);
    }
  
    animate();
  }
  