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
        <span>${days}d</span>
        <span>${hours}h</span>
        <span>${minutes}m</span>
        <span>${seconds}s</span>
    `;

    if (distance < 0) {
        countdownElement.innerHTML = 'The Island of Toys is now open!';
    }
}

// Update every second
setInterval(updateCountdown, 1000);


