// category to product & change card content
function goToDetails(image, title, price, color, category) {
    const url = `../html/${category} products.html?image=${image}&title=${title}&price=${price}&color=${color}`;
    window.location.href = url;
}

window.onload = function () {

    const mainImage = document.getElementById('mainImage');
    const mainTitle = document.getElementById('mainTitle');
    const mainPrice = document.getElementById('mainPrice');
    const mainColor = document.getElementById('mainColor');


    const params = new URLSearchParams(window.location.search);

    const image = params.get('image');
    const title = params.get('title');
    const price = params.get('price');
    const color = params.get('color');


    if (image && title && price && color) {
        mainImage.src = image;
        mainTitle.innerText = title;
        mainPrice.innerText = price;
        mainColor.innerText = "Color: " + color;
    }


    const productCards = document.querySelectorAll('.product-Card');


    productCards.forEach(card => {
        const cardTitle = card.getAttribute('data-title');
        if (cardTitle === title) {
            card.style.display = 'none';
        }
    });


    productCards.forEach(card => {
        card.addEventListener('click', function () {
            const newImage = card.getAttribute('data-image');
            const newTitle = card.getAttribute('data-title');
            const newPrice = card.getAttribute('data-price');
            const newColor = card.getAttribute('data-color');

            mainImage.src = newImage;
            mainTitle.innerText = newTitle;
            mainPrice.innerText = newPrice;
            mainColor.innerText = "Color: " + newColor;


            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
};
