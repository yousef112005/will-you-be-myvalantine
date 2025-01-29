function sayYes() {
    hideMainElements();
    document.getElementById("yesContent").classList.remove("hidden"); // Show Yes GIF
}

function sayNo() {
    hideMainElements();
    document.getElementById("sadBear").classList.remove("hidden"); // Show No GIF
}

function hideMainElements() {
    document.getElementById("mainGif").classList.add("hidden"); // Hide main GIF
    document.getElementById("mainText").classList.add("hidden"); // Hide main text
    document.querySelector(".buttons").classList.add("hidden"); // Hide buttons
}

// Generate Floating Hearts
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    
    document.querySelector(".hearts-container").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);
