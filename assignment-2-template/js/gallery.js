// Array of image objects with paths and captions for each image
const images = [
    { large: 'images/flowers-pink-large.jpg', thumb: 'images/flowers-pink-small.jpg', caption: 'Pink Dahlias in Bloom - Vibrant and Delicate' },
    { large: 'images/flowers-purple-large.jpg', thumb: 'images/flowers-purple-small.jpg', caption: 'Purple Bluebells - Early Morning Magic' },
    { large: 'images/flowers-red-large.jpg', thumb: 'images/flowers-red-small.jpg', caption: 'Field of Red Poppies - Passion and Color' },
    { large: 'images/flowers-white-large.jpg', thumb: 'images/flowers-white-small.jpg', caption: 'Beautiful Daffodils - Pure and Elegant' },
    { large: 'images/flowers-yellow-large.jpg', thumb: 'images/flowers-yellow-small.jpg', caption: 'Bright Yellow Sunflowers - Radiance of Sunshine' }
  ];
  
  // Select DOM elements for easy access
  const featuredImage = document.getElementById('featured-image');
  const caption = document.getElementById('caption');
  const thumbnailList = document.getElementById('thumbnail-list');
  
  // Dynamically populate thumbnail list
  images.forEach((image, index) => {
    const listItem = document.createElement('li');
    const img = document.createElement('img');
    img.src = image.thumb;
    img.alt = image.caption;
    img.dataset.index = index;
  
    // Event listener to update featured image and activate clicked thumbnail
    img.addEventListener('click', () => {
      setActiveImage(index);
    });
  
    listItem.appendChild(img);
    thumbnailList.appendChild(listItem);
  });
  
  // Function to set the active featured image and update caption
  function setActiveImage(index) {
    const activeImage = images[index];
    featuredImage.src = activeImage.large;
    caption.textContent = activeImage.caption;
  
    // Remove 'active' class from all thumbnails and add to the clicked one
    document.querySelectorAll('#thumbnail-list img').forEach(img => img.classList.remove('active'));
    document.querySelector(`#thumbnail-list img[data-index="${index}"]`).classList.add('active');
  }
  
  // Lightbox feature for the featured image
  featuredImage.addEventListener('click', () => {
    const lightbox = document.createElement('div');
    lightbox.classList.add('lightbox');
    document.body.appendChild(lightbox);
  
    const lightboxImage = document.createElement('img');
    lightboxImage.src = featuredImage.src;
    lightboxImage.classList.add('lightbox-img');
    lightbox.appendChild(lightboxImage);
  
    // Remove lightbox when clicking anywhere outside the image
    lightbox.addEventListener('click', () => {
      document.body.removeChild(lightbox);
    });
  });
  
  // Initialize gallery with the first image as active
  setActiveImage(0);
  