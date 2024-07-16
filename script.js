// Countdown timer
const countdownElement = document.getElementById('countdown');
const countdownDate = new Date('2024-08-01').getTime(); // Set your launch date here

function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `
        <div>${days}d</div>
        <div>${hours}h</div>
        <div>${minutes}m</div>
        <div>${seconds}s</div>
    `;

    if (distance < 0) {
        countdownElement.innerHTML = 'The Island of Toys is now open!';
    }
}

// Update every second
setInterval(updateCountdown, 1000);

// Toy adventure scene (you can use CSS animations or JavaScript for animation effects)
// Example: Displaying animated or static images of toys on an adventure
// You can replace this with your own animation logic
const toySceneElement = document.getElementById('toy-scene');
toySceneElement.innerHTML = `
    <!-- Your animated or static toy adventure content goes here -->
`;
