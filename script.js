// List of URLs to rotate through
const urls = [
            "https://forms.office.com/e/bm2HmGdijL",
    // Add more URLs as needed
];

// Function to get a random URL from the list
function getRandomUrl() {
    const randomIndex = Math.floor(Math.random() * urls.length);
    return urls[randomIndex];
}

// Event listener for button click
document.getElementById('rotateButton').addEventListener('click', () => {
    const randomUrl = getRandomUrl();
    window.location.href = randomUrl;
});
