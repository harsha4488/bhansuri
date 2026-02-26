const app = document.getElementById("app");

/* HERO IMAGES */
const heroImages = [
  "images/bansuri1.jpg",
  "images/bansuri2.jpg",
  "images/bansuri3.jpg",
  "images/bansuri4.jpg",
  "images/bansuri5.jpg",
  "images/bansuri6.jpg"

];

let heroIndex = 0;

/* MENU ITEMS */
const menu = [
  { name: "Barfi", img: "images/bansuri2.jpg" },
  { name: "Kaju katli", img: "images/bansuri3.jpg" },
  { name: "Puri", img: "images/bansuri4.jpg" },
  { name: "Jalebi", img: "images/bansuri5.jpg" },
   { name: "Gulab Jamun", img: "images/bansuri6.jpg" },
   { name: "Pani puri", img: "images/bansuri7.jpg" },
   { name: "Menu", img: "images/bansuri8.jpg" }
];

/* SECTIONS */
function home() {
  return `
    <section id="home" class="hero">
      <div class="hero-content">
        <h1>Bansuri Sweets</h1>
        <p>Authentic Indian Sweets in Vijayanagar, Bangalore</p>
        <a href="#menu" class="btn">View Sweets</a>
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
            <img src="${item.img}" alt="${item.name}">
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
      <p>📍 2393/D, 1st Main Rd, RPC Layout, Stage 1, Vijayanagar, Bengaluru, Karnataka 560104</p>
      <p>📞 Call us for bulk orders</p>
      <p>🕘 Open Daily: 9 AM – 9 PM</p>
    </section>
  `;
}

/* RENDER */
app.innerHTML =
  home() +
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
