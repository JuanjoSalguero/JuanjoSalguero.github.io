// Get the slider element by its ID
const slider = document.getElementById('mySlider');

// Initialize a flag to track if the mouse is being dragged
let isDragging = false;

// When the mouse button is pressed down on the slider
slider.addEventListener('mousedown', () => {
  // Set the isDragging flag to true
  isDragging = true;

  // Pause the animation of the slide track
  const slideTrack = slider.querySelector('.slide-track');
  slideTrack.style.animationPlayState = 'paused';
});

// When the mouse button is released on the slider
slider.addEventListener('mouseup', () => {
  // Set the isDragging flag to false
  isDragging = false;

  // Resume the animation of the slide track
  const slideTrack = slider.querySelector('.slide-track');
  slideTrack.style.animationPlayState = 'running';
});

// When the mouse pointer leaves the slider
slider.addEventListener('mouseleave', () => {
  // If the mouse is currently being dragged
  if (isDragging) {
    // Resume the animation of the slide track
    const slideTrack = slider.querySelector('.slide-track');
    slideTrack.style.animationPlayState = 'running';
  }
});