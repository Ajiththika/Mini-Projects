const mainImage = document.getElementById('mainImage');
const pictures = document.querySelectorAll('.pictures img');

pictures.forEach(picture => {
  picture.addEventListener('click', () => {
    // Update main image
    mainImage.src = picture.dataset.large;

    // Remove 'active' class from all pictures
    pictures.forEach(p => p.classList.remove('active'));

    // Add 'active' class to clicked picture
    picture.classList.add('active');
  });
});
