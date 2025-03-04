// Redirects to another page when "Yes" is clicked
function nextPage() {
    window.location.href = 'yes.html';
}

// Moves the "No" button randomly and adds animations
function moveButton() {
    const noButton = document.getElementById('noButton');

    // Calculate random position within the viewport
    const maxWidth = window.innerWidth - noButton.offsetWidth;
    const maxHeight = window.innerHeight - noButton.offsetHeight;
    const randomX = Math.random() * maxWidth;
    const randomY = Math.random() * maxHeight;

    // Move the button
    noButton.style.position = 'absolute';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;

    // Add wiggle animation
    noButton.classList.add('wiggle');
    noButton.addEventListener('animationend', () => {
        noButton.classList.remove('wiggle');
    }, { once: true });

    // Create a floating heart animation
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = `${noButton.offsetLeft + noButton.offsetWidth / 2}px`;
    heart.style.top = `${noButton.offsetTop + noButton.offsetHeight / 2}px`;
    document.body.appendChild(heart);

    // Remove the heart after the animation ends
    heart.addEventListener('animationend', () => {
        heart.remove();
    }, { once: true });
}