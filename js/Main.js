document.addEventListener("DOMContentLoaded", function () {
    let cartCount = parseInt(localStorage.getItem("cartCount")) || 0;
    document.getElementById("cartCount").textContent = cartCount;
    let favCount = parseInt(localStorage.getItem("favoriteCount")) || 0;
    const favoriteNumber = document.querySelector('.favoriteNumber');
    if (favoriteNumber) {
        favoriteNumber.textContent = favCount;
    }
});