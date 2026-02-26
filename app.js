const app = document.getElementById("app");

/* HERO IMAGES */
const heroImages = [
  "images/bansuri1.jpg",
  "images/bansuri2.jpg",
  "images/bansuri3.jpg"
];

let heroIndex = 0;

/* SWEETS MENU */
const menu = [
  { name: "Gulab Jamun", img: "images/bansuri2.jpg" },
  { name: "Rasgulla", img: "images/bansuri3.jpg" },
  { name: "Laddu", img: "images/bansuri4.jpg" },
  { name: "Barfi", img: "images/bansuri5.jpg" }
];

/* SECTIONS */
function home() {
  return `
    <section id="home" class="hero">
      <div class="hero-content">
        <h1>Bhansuri Sweets</h1>
        <p>Authentic Indian Sweets in Vijayanagar</p>
        <a href="#menu" class="btn">View Sweets</a>
      </div>
    </section>
  `;
}

function sundaySpecial() {
  return `
    <section class="section sunday-special">
      <div class="special-card">
        <img src="images/bansuri9.jpg">
        <div class="special-overlay">
          <h2>Sunday Special Breakfast</h2>
          <p>Kolkata Special</p>
          <span>⏰ 8:30 AM – 12:00 PM</span>
        </div>
      </div>
    </section>
  `;
}

function menuSection() {
  return `
    <section id="menu" class="section">
      <h2>Our Special Sweets</h2>
      <div class="cards">
        ${menu.map(item => `
          <div class="card">
            <img src="${item.img}">
            <div class="card-content">
              <h3>${item.name}</h3>
              <p>Freshly prepared every day</p>
            </div>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}

function gallerySection() {
  return `
    <section id="gallery" class="section">
      <h2>Our Shop</h2>
      <div class="gallery">
        <img src="images/bansuri1.jpg">
        <img src="images/bansuri3.jpg">
      </div>
    </section>
  `;
}

function contactSection() {
  return `
    <section id="contact" class="section">
      <h2>Visit Us</h2>
      <p>📍 Vijayanagar, Bangalore</p>
      <p>📞 Call us for bulk orders</p>
      <p>🕘 Open Daily: 9 AM – 9 PM</p>
    </section>
  `;
}

/* RENDER */
app.innerHTML =
  home() +
  sundaySpecial() +
  menuSection() +
  gallerySection() +
  contactSection();

/* HERO SLIDER */
const hero = document.querySelector(".hero");
hero.style.backgroundImage = `url('${heroImages[0]}')`;

setInterval(() => {
  heroIndex = (heroIndex + 1) % heroImages.length;
  hero.style.backgroundImage = `url('${heroImages[heroIndex]}')`;
}, 4000);

/* SCROLL ANIMATION */
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
  cards.forEach(card => {
    if (card.getBoundingClientRect().top < window.innerHeight - 100) {
      card.classList.add("show");
    }
  });
});
