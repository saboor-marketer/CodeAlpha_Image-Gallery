// Sample image data with categories
const images = [
    { src: 'images/nature1.jpg', category: 'nature', title: 'Beautiful Nature' },
    { src: 'images/mountain.jpg', category: 'nature', title: 'Mountain View' },
    { src: 'images/forest.jpg', category: 'nature', title: 'Green Forest' },
    { src: 'images/lion.jpg', category: 'animals', title: 'Lion King' },
    { src: 'images/elephant.jpg', category: 'animals', title: 'Elephant' },
    { src: 'images/bird.jpg', category: 'animals', title: 'Colorful Bird' },
    { src: 'images/building.jpg', category: 'architecture', title: 'Modern Building' },
    { src: 'images/bridge.jpg', category: 'architecture', title: 'Bridge' },
    { src: 'images/city.jpg', category: 'architecture', title: 'City Skyline' },
    { src: 'images/waterfall.jpg', category: 'nature', title: 'Waterfall' },
    { src: 'images/tiger.jpg', category: 'animals', title: 'Tiger' },
    { src: 'images/cathedral.jpg', category: 'architecture', title: 'Cathedral' }
];

// DOM Elements
const gallery = document.querySelector('.gallery');
const filterButtons = document.querySelectorAll('.filter-btn');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close-btn');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentImageIndex = 0;
let filteredImages = [];

// Initialize the gallery
function initGallery() {
    displayImages(images);
    filteredImages = [...images];
}

// Display images in the gallery
function displayImages(imagesToShow) {
    gallery.innerHTML = '';
    
    imagesToShow.forEach((image, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.setAttribute('data-category', image.category);
        galleryItem.setAttribute('data-index', index);
        
        galleryItem.innerHTML = `
            <img src="${image.src}" alt="${image.title}">
            <div class="overlay">
                <h3>${image.title}</h3>
                <p>${image.category}</p>
            </div>
        `;
        
        galleryItem.addEventListener('click', () => openLightbox(index));
        gallery.appendChild(galleryItem);
    });
}

// Filter images by category
function filterImages(category) {
    if (category === 'all') {
        filteredImages = [...images];
    } else {
        filteredImages = images.filter(img => img.category === category);
    }
    
    // Update active button
    filterButtons.forEach(btn => {
        if (btn.dataset.filter === category) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    displayImages(filteredImages);
}

// Open lightbox with selected image
function openLightbox(index) {
    currentImageIndex = index;
    updateLightboxImage();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close lightbox
function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Update lightbox image
function updateLightboxImage() {
    const image = filteredImages[currentImageIndex];
    lightboxImg.src = image.src;
    lightboxImg.alt = image.title;
}

// Navigate to previous image
function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + filteredImages.length) % filteredImages.length;
    updateLightboxImage();
}

// Navigate to next image
function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % filteredImages.length;
    updateLightboxImage();
}

// Event Listeners
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.dataset.filter;
        filterImages(filter);
    });
});

closeBtn.addEventListener('click', closeLightbox);
prevBtn.addEventListener('click', showPrevImage);
nextBtn.addEventListener('click', showNextImage);

// Close lightbox when clicking outside the image
document.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    
    switch(e.key) {
        case 'Escape':
            closeLightbox();
            break;
        case 'ArrowLeft':
            showPrevImage();
            break;
        case 'ArrowRight':
            showNextImage();
            break;
    }
});

// Swipe support for touch devices
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, false);

document.addEventListener('touchend', (e) => {
    if (!lightbox.classList.contains('active')) return;
    
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, false);

function handleSwipe() {
    const swipeThreshold = 50; // Minimum distance to trigger swipe
    const swipeDistance = touchEndX - touchStartX;
    
    if (Math.abs(swipeDistance) > swipeThreshold) {
        if (swipeDistance > 0) {
            // Swipe right - previous image
            showPrevImage();
        } else {
            // Swipe left - next image
            showNextImage();
        }
    }
}

// Initialize the gallery when the DOM is loaded
document.addEventListener('DOMContentLoaded', initGallery);
