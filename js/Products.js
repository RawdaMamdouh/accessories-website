// products page
const heartIcon = document.getElementById('heartIcon');
heartIcon.addEventListener('click', function () {
  this.classList.toggle('far');
  this.classList.toggle('fas');
})

const starIcons = document.querySelectorAll('.StarIcon');

starIcons.forEach((starIcon, index) => {
  starIcon.addEventListener('click', () => {
    starIcons.forEach((star, i) => {
      if (i <= index) {
        star.classList.add('fas');
        star.classList.remove('far');
      } else {
        star.classList.add('far');
        star.classList.remove('fas');
      }
    });
  });
});

function clearText() {
  document.getElementById('textInput').value = '';
}

const heart = document.getElementById('heartIcon');
const favoriteNumber = document.querySelector('.favoriteNumber');

let isFavorited = localStorage.getItem('isFavorited') === 'true';
let currentFavCount = parseInt(localStorage.getItem('favoriteCount')) || 0;

if (isFavorited) {
  heart.classList.add('favorited', 'fas');
  heart.classList.remove('far');
} else {
  heart.classList.remove('favorited', 'fas');
  heart.classList.add('far');
}
favoriteNumber.textContent = currentFavCount;

heart.addEventListener('click', () => {
  isFavorited = !isFavorited;

  if (isFavorited) {
    heart.classList.add('favorited', 'fas');
    heart.classList.remove('far');
    currentFavCount++;
  } else {
    heart.classList.remove('favorited', 'fas');
    heart.classList.add('far');
    currentFavCount--;
  }

  favoriteNumber.textContent = currentFavCount;


  localStorage.setItem('isFavorited', isFavorited);
  localStorage.setItem('favoriteCount', currentFavCount);
});

let count = parseInt(localStorage.getItem("cartCount"));
document.getElementById("cartCount").textContent = count;
document.getElementById("addToCartBtn").addEventListener("click", function () {
  count++;
  localStorage.setItem("cartCount", count);
  document.getElementById("cartCount").textContent = count;
});
