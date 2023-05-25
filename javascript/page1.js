
function goToPosition(position) {
  const slider = document.querySelector('.slider');
  const newPosition = document.getElementById(`position${position}`).offsetLeft;
  slider.scrollTo({
    left: newPosition,
    behavior: 'smooth'
  });
}
//dots
function updateActiveDot(position) {
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index + 1 === position);
  });
}

// Event listener for scrolling
const slider = document.querySelector('.slider');
slider.addEventListener('scroll', () => {
  const scrollPosition = slider.scrollLeft + slider.offsetWidth / 2;
  const positions = document.querySelectorAll('.page_poster');
  let activePosition = 1;
  positions.forEach((position, index) => {
    if (scrollPosition >= position.offsetLeft) {
      activePosition = index + 1;
    }
  });
  updateActiveDot(activePosition);
});
document.addEventListener("DOMContentLoaded", function() {
  const slider = document.querySelector('.slider');
  const prevBtn = document.querySelector('.arrow-prev');
  const nextBtn = document.querySelector('.arrow-next');

  prevBtn.addEventListener('click', function() {
    slider.scrollLeft -= 1470;
  });

  nextBtn.addEventListener('click', function() {
    slider.scrollLeft += 1470;
  });
});
//search-button
const searchButton = document.querySelector('.search-button');
const searchDiv = document.querySelector('#search-div');

searchButton.addEventListener('click', function() {
  searchDiv.style.display = searchDiv.style.display === 'none' ? 'block' : 'none';
});
//blur-effect
const websiteContainer = document.getElementById('#website-container');
const search_Button = document.getElementById('#search-button');

search_Button.addEventListener('click', function() {
  websiteContainer.classList.add('blur');
});
//moving to next page
