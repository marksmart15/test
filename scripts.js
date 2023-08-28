const descriptions = [
    "Vibrant and colorful masterpiece.",
    "A surreal journey into the unknown.",
    "Capturing the essence of nature's beauty.",
    "Abstract expression of emotions.",
    "A play of light and shadows.",
    "Evoking a sense of nostalgia.",
    "Bold and thought-provoking composition.",
    "Elegance and simplicity combined.",
    "An exploration of texture and form.",
    "A reflection of the artist's soul."
];

function getRandomDescription() {
    const randomIndex = Math.floor(Math.random() * descriptions.length);
    return descriptions[randomIndex];
}

function showArtDetails(artId) {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modal-image");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");

    // Update modal content based on the selected artwork
    if (artId === "art1") {
        modalImage.src = "https://picsum.photos/400/300/?random";
        modalTitle.textContent = "Artwork 1";
    } else if (artId === "art2") {
        modalImage.src = "https://picsum.photos/400/300/?random";
        modalTitle.textContent = "Artwork 2";
    }
    // Add more cases for other artworks

    modalDescription.textContent = getRandomDescription();
    modal.style.display = "block";
}


function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}
