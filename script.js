// ================================
// Smooth Scroll for Navigation
// ================================
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// ================================
// Dynamic Typing Effect in Home Section
// ================================
const roles = [
    "A passionate Web Developer.",
    "A Python Developer.",
    "A Front-End Specialist."
];
let roleIndex = 0;
let charIndex = 0;

const roleText = document.createElement("p");
roleText.classList.add("typing-text");

// Insert typing effect paragraph just below intro text but ABOVE buttons
const homeContent = document.querySelector(".home-content");
const firstButton = homeContent.querySelector(".btn");
homeContent.insertBefore(roleText, firstButton);

function typeEffect() {
    if (charIndex < roles[roleIndex].length) {
        roleText.textContent += roles[roleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 80);
    } else {
        setTimeout(eraseEffect, 1500);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        roleText.textContent = roles[roleIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 50);
    } else {
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeEffect, 200);
    }
}

typeEffect();

// ================================
// Download CV Button with playful animation
// ================================
const cvBtn = document.createElement("a");
cvBtn.href = "Abdul-Subhan-CV.pdf"; // replace with your CV file
cvBtn.textContent = "⬇ Download CV";
cvBtn.classList.add("btn");

cvBtn.addEventListener("mouseover", () => {
    cvBtn.style.transform = "scale(1.1) rotate(-3deg)";
    cvBtn.style.transition = "transform 0.2s ease";
});
cvBtn.addEventListener("mouseout", () => {
    cvBtn.style.transform = "scale(1) rotate(0deg)";
});

homeContent.appendChild(cvBtn);

// ================================
// Magic Mouse Trail Effect
// ================================
document.addEventListener("mousemove", (e) => {
    const trail = document.createElement("div");
    trail.className = "trail";
    document.body.appendChild(trail);

    // Position at mouse
    trail.style.left = `${e.pageX - 6}px`;
    trail.style.top = `${e.pageY - 6}px`;

    // Remove after animation ends
    setTimeout(() => {
        trail.remove();
    }, 600);
});
