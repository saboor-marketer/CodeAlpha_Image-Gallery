# Image Gallery

A responsive image gallery with filtering and lightbox features, built with HTML, CSS, and JavaScript.

## Features

- **Responsive Design**: Works on all device sizes
- **Image Filtering**: Filter images by categories (Nature, Animals, Architecture)
- **Lightbox Viewer**: Click any image to view in a larger lightbox
- **Smooth Transitions**: Elegant animations and hover effects
- **Keyboard Navigation**: Use arrow keys to navigate between images
- **Touch Support**: Swipe gestures for mobile devices

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server required - works directly from the file system

### Installation

1. Clone or download this repository
2. Navigate to the project directory
3. Open `index.html` in your web browser

## Usage

1. **Browsing Images**
   - Scroll through the grid of images
   - Hover over images to see a subtle zoom effect

2. **Filtering Images**
   - Click on the category buttons at the top to filter images
   - Click "All" to show all images

3. **Lightbox Features**
   - Click any image to open it in the lightbox
   - Use the arrow buttons or keyboard arrows to navigate
   - Click the close button (×) or press ESC to close
   - On touch devices, swipe left/right to navigate

## Project Structure

```
image-gallery/
├── index.html          # Main HTML file
├── styles.css         # All styling
├── script.js          # JavaScript functionality
└── images/            # Directory for all images
    ├── nature1.jpg
    ├── mountain.jpg
    ├── forest.jpg
    ├── lion.jpg
    ├── elephant.jpg
    ├── bird.jpg
    ├── building.jpg
    ├── bridge.jpg
    ├── city.jpg
    ├── waterfall.jpg
    ├── tiger.jpg
    └── cathedral.jpg
```

## Customization

### Adding New Images
1. Add your images to the `images` folder
2. Update the `images` array in `script.js` with the new image details:
   ```javascript
   {
       src: 'images/your-image.jpg',
       category: 'your-category',  // nature, animals, or architecture
       title: 'Your Image Title'
   }
   ```

### Changing Categories
To add or modify categories:
1. Update the filter buttons in `index.html`
2. Update the `category` values in the `images` array in `script.js`

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Safari (iOS 10+)
- Chrome for Android

## License

This project is open source and available under the [MIT License](LICENSE).

## Credits

- Images: [Unsplash](https://unsplash.com/)
- Icons: [Font Awesome](https://fontawesome.com/)

---

Created with ❤️ for your image viewing pleasure!
