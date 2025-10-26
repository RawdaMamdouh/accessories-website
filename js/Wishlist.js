const removeButtons = document.querySelectorAll('.removeBtn');
removeButtons.forEach(button => {
    button.addEventListener('click', function () {
        const card = button.closest('.wishlist-card');

        if (card) {
            card.style.display = 'none';
        }
    });
});
const addToCartButtons = document.querySelectorAll('.addToCartBtn');
addToCartButtons.forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();


        let cartIcon = document.getElementById("cartCount");
        let currentCount = parseInt(cartIcon.textContent) || 0;
        cartIcon.textContent = currentCount + 1;


        localStorage.setItem("cartCount", cartIcon.textContent);
    });
});