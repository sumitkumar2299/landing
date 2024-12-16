const images = document.querySelectorAll('#image-container img');
let currentIndex = 0;

setInterval(() => {
  // Remove the active class from the current image
  images[currentIndex].classList.remove('active');
  // Move to the next image
  currentIndex = (currentIndex + 1) % images.length;
  // Add the active class to the new current image
  images[currentIndex].classList.add('active');
}, 4000); // 4 seconds
