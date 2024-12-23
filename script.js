document.addEventListener("DOMContentLoaded", () => {
    const box = document.querySelector(".box");

    // Create the Christmas card
    const card = document.createElement("div");
    card.classList.add("christmas-card");
    card.innerHTML = `
        <h1>Merry Christmas!😆</h1>
        <p>Dearst, Wishing you a life filled with joy, love, and laughter! I love you so much.❤️

Your dear friend,
Henry Liao</p>
    `;

    // Append the card to the body
    document.body.appendChild(card);

    // Track the state (whether the card is visible or hidden)
    let cardVisible = false;
    let musicPlayed = false;

    // Reference the audio element
    const backgroundMusic = document.getElementById("background-music");

    // Add click event to the box
    box.addEventListener("click", () => {
        if (!cardVisible) {
            // Show the card
            card.style.display = "flex";
            cardVisible = true;

            // Play music if not already played
            if (!musicPlayed) {
                backgroundMusic.play();
                musicPlayed = true;
            }
        }
    });

    // Add click event to the card
    card.addEventListener("click", () => {
        if (cardVisible) {
            // Hide the card with animation
            card.classList.add("hidden");
            setTimeout(() => {
                card.style.display = "none";
                card.classList.remove("hidden");
            }, 1000); // Match the animation duration (1s)
            cardVisible = false;
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // Snowfall effect
    function createSnowflakes() {
        const snowContainer = document.querySelector(".snow");
        for (let i = 0; i < 100; i++) { // Adjust number of snowflakes here
            const snowflake = document.createElement("div");
            snowflake.classList.add("snowflake");
            snowflake.innerHTML = "&#10052;"; // Snowflake character

            // Set random size and position
            snowflake.style.fontSize = `${Math.random() * 1.5 + 1}em`; // Random size between 1em and 2.5em
            snowflake.style.left = `${Math.random() * 100}vw`; // Random horizontal position
            snowflake.style.animationDuration = `${Math.random() * 3 + 7}s`; // Random animation speed between 7s and 10s
            snowflake.style.animationDelay = `${Math.random() * 5}s`; // Random delay before falling starts

            snowContainer.appendChild(snowflake);
        }
    }

    // Call snowflakes creation function
    createSnowflakes();
});
