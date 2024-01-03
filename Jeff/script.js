document.addEventListener('DOMContentLoaded', function () {
  animateHeader();
  animateSlidingText(); // Call the sliding text animation function here
  handleScroll(); // Call the initial scroll handling

  // Function to check if an element is in the viewport
  function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Function to handle scroll event
  function handleScroll() {
    var container = document.querySelector('.container');
    if (isInViewport(container)) {
      container.style.opacity = 1;
    }
  }

  // Add an event listener for the button click to remove the overlay
  document.getElementById('yourButtonId').addEventListener('click', removeOverlay);

  // Function to animate header elements
  function animateHeader() {
    const pageTitle = document.getElementById('pageTitle');
    const pageSubtitle = document.getElementById('pageSubtitle');
    const headerImage = document.getElementById('headerImage');

    setTimeout(() => {
      pageTitle.style.opacity = '1';
      pageTitle.style.transform = 'translateY(0)';
    }, 500);

    setTimeout(() => {
      pageSubtitle.style.opacity = '1';
      pageSubtitle.style.transform = 'translateY(0)';
    }, 1000);

    setTimeout(() => {
      headerImage.style.opacity = '1';
      headerImage.style.transform = 'translateY(0)';
    }, 1500);
  }

  // Function to animate sliding text
  function animateSlidingText() {
    const slidingText = document.getElementById('slidingText');
    const words = slidingText.innerText.split(' ');

    // Clear existing text
    slidingText.innerText = '';

    // Create spans for each word
    words.forEach((word, index) => {
      const wordSpan = document.createElement('span');
      wordSpan.innerText = word;
      wordSpan.style.animation = `slideIn 0.5s ease ${index * 0.3}s forwards`; // Define the CSS animation here
      slidingText.appendChild(wordSpan);

      // Add space between words
      if (index < words.length - 1) {
        const spaceSpan = document.createElement('span');
        spaceSpan.innerText = ' ';
        slidingText.appendChild(spaceSpan);
      }
    });
  }

  // Function to remove the overlay
  function removeOverlay() {
    document.getElementById('blurOverlay').style.display = 'none';
  }
});
