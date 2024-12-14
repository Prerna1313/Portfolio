// Back to Top Button
const backToTop = document.getElementById("back-to-top");
window.onscroll = () => {
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
};

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Theme Toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Animated Typing Text
const animatedText = document.querySelector(".animated-text");
const phrases = ["WELCOME TO MY PORTFOLIO", "I AM PRERNA KASHYAP", "ASPIRING DEVELOPER"];
let phraseIndex = 0;
let charIndex = 0;

function typeText() {
    if (charIndex < phrases[phraseIndex].length) {
        animatedText.textContent += phrases[phraseIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 150);
    } else {
        setTimeout(eraseText, 2000);
    }
}

function eraseText() {
    if (charIndex > 0) {
        animatedText.textContent = phrases[phraseIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, 100);
    } else {
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(typeText, 1000);
    }
}

document.addEventListener("DOMContentLoaded", typeText);
