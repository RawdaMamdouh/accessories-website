// payment page
document.addEventListener("DOMContentLoaded", () => {
    const cardInput = document.getElementById("card");
    const expiryInput = document.getElementById("expiry");
    const cvvInput = document.getElementById("cvv");


    cardInput.addEventListener("input", (e) => {
        let value = e.target.value.replace(/\D/g, "");
        value = value.match(/.{1,4}/g)?.join(" ") || value;
        e.target.value = value.substring(0, 19);
    });


    expiryInput.addEventListener("input", (e) => {
        let value = e.target.value.replace(/\D/g, "");
        if (value.length > 2) {
            value = value.substring(0, 2) + "/" + value.substring(2, 4);
        }
        e.target.value = value.substring(0, 5);
    });


    cvvInput.addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/\D/g, "").substring(0, 3);
    });
});