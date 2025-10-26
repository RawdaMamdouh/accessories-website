const cartItems = document.querySelectorAll('.container4');
const totalCartPriceEl = document.querySelector('.total');

function updateTotals() {
    let total = 0;

    cartItems.forEach(item => {
        const quantityEl = item.querySelector('.quantity');
        const priceEl = item.querySelector('.original-price');
        const quantity = parseInt(quantityEl.textContent);
        const unitPrice = parseFloat(priceEl.dataset.unitPrice);
        const itemTotal = quantity * unitPrice;

        priceEl.textContent = `${itemTotal} L.E`;
        total += itemTotal;
    });

    totalCartPriceEl.textContent = `${total} L.E`;
}

cartItems.forEach(item => {
    const plusBtn = item.querySelector('.plus-btn');
    const minusBtn = item.querySelector('.minus-btn');
    const quantityEl = item.querySelector('.quantity');

    plusBtn.addEventListener('click', () => {
        let quantity = parseInt(quantityEl.textContent);
        quantity++;
        quantityEl.textContent = quantity;
        updateTotals();


        let cartIcon = document.getElementById("cartCount");
        let currentCount = parseInt(cartIcon.textContent) || 0;
        cartIcon.textContent = currentCount + 1;
        localStorage.setItem("cartCount", cartIcon.textContent);
    });

    minusBtn.addEventListener('click', () => {
        let quantity = parseInt(quantityEl.textContent);
        if (quantity > 1) {
            quantity--;
            quantityEl.textContent = quantity;
            updateTotals();

            let cartIcon = document.getElementById("cartCount");
            let currentCount = parseInt(cartIcon.textContent) || 0;
            if (currentCount > 0) {
                cartIcon.textContent = currentCount - 1;
                localStorage.setItem("cartCount", cartIcon.textContent);
            }
        }
    });
});

updateTotals();