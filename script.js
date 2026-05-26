// Function to update the Lightbox modal image
function updateLightbox(src) {
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = src;
}

// Reset the modal image when closed (optional for performance)
document.getElementById('lightboxModal').addEventListener('hidden.bs.modal', () => {
    document.getElementById('lightbox-img').src = '';
});