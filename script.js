// =========================
// PRODUCT CAROUSEL SCROLL
// =========================

const carousel = document.getElementById("productCarousel");

const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");

// SCROLL LEFT

leftBtn.addEventListener("click", () => {

    carousel.scrollBy({

        left: -350,
        behavior: "smooth"

    });

});

// SCROLL RIGHT

rightBtn.addEventListener("click", () => {

    carousel.scrollBy({

        left: 350,
        behavior: "smooth"

    });

});

// =========================
// NEWSLETTER FORM
// =========================

const newsletterForm = document.querySelector(".newsletter-form");

newsletterForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const emailInput = newsletterForm.querySelector("input");

    if (emailInput.value.trim() === "") {

        alert("Please enter your email.");

        return;

    }

    alert("Thank you for subscribing to VALYOR.");

    emailInput.value = "";

});

const video = document.getElementById("heroVideo");
const unmuteBtn = document.getElementById("unmuteBtn");

unmuteBtn.addEventListener("click", () => {

    if(video.muted){

        video.muted = false;

        unmuteBtn.innerHTML =
        '<i class="fa-solid fa-volume-high"></i>';

    }

    else{

        video.muted = true;

        unmuteBtn.innerHTML =
        '<i class="fa-solid fa-volume-xmark"></i>';

    }

});