// ----------------------------
// MUSIC PLAYER FUNCTIONALITY
// ----------------------------

// Audio file
const audio = new Audio("asset/daylight.mp3");

// Elements
const playBtn = document.querySelector(".play-btn");
const progressBar = document.querySelector(".progress-bar");
const currTime = document.querySelector(".curr-time");
const totTime = document.querySelector(".tot-time");
const volumeSlider = document.querySelector(".control-vol");

// Time format helper
function formatTime(sec) {
    if (isNaN(sec)) return "0:00";
    let m = Math.floor(sec / 60);
    let s = Math.floor(sec % 60);
    return `${m}:${s < 10 ? "0" + s : s}`;
}

// ----------------------------
// Play / Pause Toggle
// ----------------------------
playBtn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playBtn.style.opacity = "1";
    } else {
        audio.pause();
        playBtn.style.opacity = "0.6";
    }
});

// ----------------------------
// Update Progress Bar
// ----------------------------
audio.addEventListener("timeupdate", () => {
    if (audio.duration) {
        progressBar.value = (audio.currentTime / audio.duration) * 100;

        currTime.textContent = formatTime(audio.currentTime);
        totTime.textContent = formatTime(audio.duration);
    }
});

// ----------------------------
// Seek In Audio
// ----------------------------
progressBar.addEventListener("input", () => {
    audio.currentTime = (progressBar.value / 100) * audio.duration;
});

// ----------------------------
// Volume Control
// ----------------------------
volumeSlider.addEventListener("input", () => {
    audio.volume = volumeSlider.value / 100;
});



// ----------------------------
// CARD CLICK HIGHLIGHT
// ----------------------------
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        cards.forEach(c => c.style.backgroundColor = "#232323");
        card.style.backgroundColor = "#3e3d3d";
    });
});

// ----------------------------
// NAV OPTIONS HOVER EFFECT
// ----------------------------
const navOptions = document.querySelectorAll('.nav-option');

navOptions.forEach(opt => {
    opt.addEventListener("mouseover", () => opt.style.opacity = "1");
    opt.addEventListener("mouseout", () => opt.style.opacity = "0.7");
});

// ----------------------------
// LIBRARY BUTTON CLICK
// ----------------------------
document.querySelectorAll('.badge').forEach(btn => {
    btn.addEventListener('click', () => {
        alert(`Button clicked: ${btn.textContent}`);
    });
});
