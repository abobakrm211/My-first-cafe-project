
let orderForm = document.getElementById("orderForm");
let nameInput = document.getElementById("nameInput");
let phoneInput = document.getElementById("phoneInput");
let itemSelect = document.getElementById("itemSelect");
let qtyInput = document.getElementById("qtyInput");
let orderMsg = document.getElementById("orderMsg");

orderForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let name = nameInput.value;
    let phone = phoneInput.value;
    let item = itemSelect.value;
    let qty = qtyInput.value;

    if (name === "" || phone === "") {
        orderMsg.textContent = "Please enter your name and phone number.";
    } else {
        orderMsg.textContent =
            "Thanks, " + name + "! Your order of " + qty + " x " + item +
            " is on its way. We'll call you at " + phone + " ☕";
        orderForm.reset();
    }
});



let stars = document.querySelectorAll(".star");
let selectedRating = 0;

stars.forEach(function (star) {
    star.addEventListener("click", function () {
        selectedRating = Number(star.dataset.value);
        highlightStars(selectedRating);
    });
});

function highlightStars(rating) {
    stars.forEach(function (star) {
        if (Number(star.dataset.value) <= rating) {
            star.classList.add("selected");
        } else {
            star.classList.remove("selected");
        }
    });
}

let submitRatingBtn = document.getElementById("submitRatingBtn");
let ratingMsg = document.getElementById("ratingMsg");
let reviewInput = document.getElementById("reviewInput");

submitRatingBtn.addEventListener("click", function () {
    if (selectedRating === 0) {
        ratingMsg.textContent = "Please select a star rating first.";
    } else {
        ratingMsg.textContent = "Thanks for your " + selectedRating + "-star rating! 🙏";
        reviewInput.value = "";
    }
});



let lightBtn = document.getElementById("lightBtn");
let darkBtn = document.getElementById("darkBtn");

darkBtn.addEventListener("click", function () {
    document.body.classList.add("dark");
});

lightBtn.addEventListener("click", function () {
    document.body.classList.remove("dark");
});