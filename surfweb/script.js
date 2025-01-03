const images = ['iliykata6-2.jpg', 'varnasurf-2.jpg'];
let currentImageIndex = 0;

function changeBackgroundImage() {
    const header = document.querySelector("header");
    const imageUrl = `url('${images[currentImageIndex]}')`;
    header.style.setProperty('--background-image', imageUrl);
    currentImageIndex = (currentImageIndex + 1) % images.length;
}

document.addEventListener("DOMContentLoaded", () => {
    changeBackgroundImage();
    setInterval(changeBackgroundImage, 5000);

    // Attach closePopup to the close button
    const closeButton = document.querySelector('.popup .close');
    closeButton.addEventListener('click', closePopup);
});

// Function to show the popup
function showPopup(title, videoUrl) {
    const popup = document.querySelector('.popup');
    const popupTitle = document.querySelector('.popup-content h3');
    const popupVideo = document.querySelector('.popup-content iframe');

    popupTitle.textContent = title; // Set the title
 
    popupVideo.src = videoUrl; // Set the video URL

    popup.style.display = 'flex'; // Show the popup
}

// Function to close the popup
function closePopup() {
    const popup = document.querySelector('.popup');
    const popupVideo = document.querySelector('.popup-content iframe');

    popup.style.display = 'none'; // Hide the popup
    popupVideo.src = ''; // Stop the video
}

