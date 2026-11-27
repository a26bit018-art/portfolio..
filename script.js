
// Typing animation
const typingElement = document.getElementById("typing");

const roles = [
    "Web Developer",
    "Python Programmer",
    "AI Enthusiast",
    "College Student"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;

function typeEffect() {
    if (reduceMotion) {
        typingElement.textContent = roles[0];
        return;
    }

    const currentRole = roles[roleIndex];

    if (!deleting) {
        typingElement.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {
            deleting = true;
            setTimeout(typeEffect, 1200);
            return;
        }
    } else {
        typingElement.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }

    setTimeout(typeEffect, deleting ? 50 : 100);
}

typeEffect();


// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    menuToggle.textContent =
        navLinks.classList.contains("open") ? "✕" : "☰";
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.textContent = "☰";
    });
});


// Dark and light mode
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light");

    themeToggle.textContent =
        document.body.classList.contains("light") ? "☾" : "☀";
});


// Contact form validation
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name.length < 2) {
        showMessage("Please enter your name (at least 2 characters).", true);
        return;
    }

    if (!emailPattern.test(email)) {
        showMessage("Please enter a valid email address.", true);
        return;
    }

    if (message.length < 10) {
        showMessage("Message must contain at least 10 characters.", true);
        return;
    }

    showMessage(
        "Your details are valid! This demo does not send emails.",
        false
    );

    contactForm.reset();
});

function showMessage(message, isError) {
    formMessage.textContent = message;
    formMessage.style.color = isError ? "#ff7184" : "#00e5ff";
}


// Footer current year
document.getElementById("year")?.textContent =
    new Date().getFullYear();
