const app = document.getElementById("app");

/* MENU DATA */
const dailyMenu = [
  { name: "Barfi", img: "images/bansuri2.jpg" },
  { name: "Kaju Katli", img: "images/bansuri3.jpg" },
  { name: "Jalebi", img: "images/bansuri5.jpg" },
  { name: "Gulab Jamun", img: "images/bansuri6.jpg" },
  { name: "Pani Puri", img: "images/bansuri7.jpg" }
];

const weeklyMenu = [
  { name: "Puri (Sunday Special)", img: "images/bansuri4.jpg" },
  { name: "Kolkata Special Breakfast", img: "images/bansuri9.jpg" },
  { name: "Special Menu", img: "images/bansuri8.jpg" }
];

/* Sections */
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

function videoSection() {
  return `
    <section id="video" class="section video-section">
      <h2>Watch Our Special Preparation</h2>
      <p style="color:#666;margin-bottom:25px">
        Freshly prepared sweets & snacks at Bansuri Sweets
      </p>

      <a 
        href="https://www.youtube.com/shorts/d7v4q9mbwiM" 
        target="_blank" 
        class="video-link-btn"
      >
        ▶ Watch Video on YouTube
      </a>
    </section>
  `;
}

function menuSection() {
  return `
    <section id="menu" class="section">
      <h2>Our Sweets</h2>

      <div class="menu-tabs">
        <button class="tab active" onclick="showDaily()">Prepared Everyday</button>
        <button class="tab" onclick="showWeekly()">Weekly / Special</button>
      </div>

      <div id="menu-content" class="cards">
        ${renderMenu(dailyMenu)}
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

/* Render */
app.innerHTML =
  home() +
  videoSection() +
  menuSection() +
  gallerySection() +
  contactSection();

/* Helpers */
function renderMenu(list) {
  return list.map(item => `
    <div class="card">
      <img src="${item.img}">
      <div class="card-content">
        <h3>${item.name}</h3>
        <p>Fresh & Quality Guaranteed</p>
      </div>
    </div>
  `).join("");
}

function showDaily() {
  document.getElementById("menu-content").innerHTML = renderMenu(dailyMenu);
  setActiveTab(0);
}

function showWeekly() {
  document.getElementById("menu-content").innerHTML = renderMenu(weeklyMenu);
  setActiveTab(1);
}

function setActiveTab(index) {
  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
  document.querySelectorAll(".tab")[index].classList.add("active");
}