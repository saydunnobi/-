let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
}

function changeSlide(direction) {
    showSlide(currentIndex + direction);
}

function autoSlide() {
    changeSlide(1);
    setTimeout(autoSlide, 10000); // Change slide every 5 seconds
}

// Initialize slider
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
    autoSlide();
});


const phoneNumber = "01745827703"; // Define the phone number to call

const menuItems = [
    { name: "হাঁসের মাংস", price: "180 BDT", image: "image/duck.png", stars: "★★★★★" },
    { name: "চিকেন মোমা ( ৫ টি )", price: "99 BDT", image: "image/momo.jpeg", stars: "★★★★★" },
    { name: "গরুর ভুড়ি", price: "100 BDT", image: "image/গরুর ভুড়ি.jpeg", stars: "★★★★★" },
    { name: "চালের রুটি", price: "10 BDT", image: "image/চালের রুটি.jpeg", stars: "★★★★★" },
    { name: "Margherita Pizza", price: "200 BDT", image: "https://via.placeholder.com/300x200", stars: "★★★★★" },
    { name: "Sushi Platter", price: "300 BDT", image: "https://via.placeholder.com/300x200", stars: "★★★★★" },
    { name: "Cheeseburger", price: "300 BDT", image: "https://via.placeholder.com/300x200", stars: "★★★★★" },
    { name: "Chocolate Lava Cake", price: "200 BDT", image: "https://via.placeholder.com/300x200", stars: "★★★★★" }
];

const menuContainer = document.getElementById("menuContainer");

menuItems.forEach(item => {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    menuItem.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p class="price">${item.price}</p>
        <div class="stars">${item.stars}</div>
        <button class="order-now" onclick="makeCall()">Order Now</button>
    `;

    menuContainer.appendChild(menuItem);
});

// Function to initiate a call
function makeCall() {
    window.location.href = `tel:${phoneNumber}`;
}


const reviewPhotos = [
    "image/pic-1.jpg",
    "image/pic-2.jpg",
    "image/pic-3.jpg",
    "image/pic-4.jpg",
    "image/pic-5.jpg",
    "image/pic-6.jpg",
    "image/pic-7.jpg",
    "image/pic-8.jpg",
    "image/pic-9.jpg",
    "image/pic-10.jpg",
    "image/pic-11.jpg",
    "image/pic-12.jpg",
    "image/pic-13.jpg",
    "image/pic-14.jpg",
    "image/pic-15.jpg",
];

const reviewContainer = document.getElementById("reviewContainer");

reviewPhotos.forEach(photo => {
    const img = document.createElement("img");
    img.src = photo;
    img.alt = "Customer Review Photo";
    img.classList.add("review-photo");
    reviewContainer.appendChild(img);
});
