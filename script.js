
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('particles-js')) {
        particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": 110, 
                    "density": { "enable": true, "value_area": 800 }
                },
                "color": { "value": "#00abf0" },
                "shape": { "type": "circle" },
                "opacity": {
                    "value": 0.7, 
                    "random": true,
                    "anim": { "enable": true, "speed": 1, "opacity_min": 0.2, "sync": false }
                },
                "size": {
                    "value": 4,
                    "random": true
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#00abf0",
                    "opacity": 0.6, 
                    "width": 1.5
                },
                "move": {
                    "enable": true,
                    "speed": 3,
                    "direction": "none",
                    "out_mode": "out"
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": { "enable": true, "mode": "grab" },
                    "onclick": { "enable": true, "mode": "push" },
                    "resize": true
                },
                "modes": {
                    "grab": { "distance": 140, "line_linked": { "opacity": 1 } }
                }
            },
            "retina_detect": true
        });
    }
});


const robot = document.querySelector('.mini-robot');

if (robot) {
    window.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 35;
        const y = (e.clientY / window.innerHeight - 0.5) * 35;
        
        robot.style.transform = `translate(${x}px, ${y}px) rotate(${x / 2}deg)`;
    });

    robot.addEventListener('click', () => {
        robot.style.transition = "0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
        robot.style.transform = "scale(0.7) rotate(-20deg)";
        setTimeout(() => {
            robot.style.transform = "scale(1.2) rotate(0deg)";
        }, 200);
    });
}


const revealElements = document.querySelectorAll('.project-card, .skill-item, .exp-card, .cert-card');

const revealOnScroll = () => {
    revealElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0) scale(1)";
            el.style.transition = "all 0.8s ease-out";
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', () => {
    revealElements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px) scale(0.95)";
    });
    revealOnScroll();
});