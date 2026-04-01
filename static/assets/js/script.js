/* ============================================================
   Andersen Handicrafts — Shared JavaScript
   Handles: Navbar, scroll animations, gallery filters, 
   product modal, carousel, contact form, scroll-hide filters
   ============================================================ */

/* ---------- Product Data ---------- */
const products = [{
    id: 1,
    name: "Shakyamuni Buddha — Meditation Pose",
    price: 18500,
    category: "Buddha",
    material: "Brass",
    size: "Medium",
    dimensions: '14" H × 9" W × 7" D',
    description: "A serene Shakyamuni Buddha in deep meditation, handcrafted by master artisans in Patan. The intricate detailing on the robe and lotus base showcases centuries-old lost-wax casting techniques passed down through generations.",
    shortDescription: "Hand-cast brass meditation Buddha",
    image: "/static/assets/images/buddha.jpg",
    isNew: true
  },
  {
    id: 2,
    name: "Yogini — Divine Power Fiery Glory",
    price: 12500,
    category: "Yogini",
    material: "Wood",
    size: "Small",
    dimensions: '8" H × 5" W × 4" D',
    description: "Carved from a single block of Himalayan sal wood, this Ganesh statue embodies warmth and wisdom. Each curve and ornament is hand-carved, finished with natural beeswax polish for a rich patina.",
    shortDescription: "Hand-carved Himalayan sal wood Ganesh",
    image: "/static/assets/images/yogini.jpg",
    isNew: true
  },
  {
    id: 3,
    name: "White Tara — Goddess of Compassion",
    price: 32000,
    category: "Yogini",
    material: "Marble",
    size: "Large",
    dimensions: '26" H × 14" W × 10" D',
    description: "Sculpted from pristine Makwanpur marble, White Tara sits gracefully on a double lotus throne. The translucent quality of the stone brings an ethereal glow to this compassionate Yogini.",
    shortDescription: "Pristine marble White Tara sculpture",
    image: "/static/assets/images/white-tara.jpg",
    isNew: false
  },
  {
    id: 4,
    name: "Mahakala — Wisdom & Strength",
    price: 4500,
    category: "Mahakala",
    material: "Resin",
    size: "Small",
    dimensions: '6" H × 8" W × 4" D',
    description: "A regal elephant figure with intricate carved patterns inspired by traditional Newari temple motifs. Cast in premium resin with an antique bronze finish for lasting beauty.",
    shortDescription: "Resin elephant with Newari motifs",
    image: "/static/assets/images/mahakala.jpg",
    isNew: true
  },
  {
    id: 5,
    name: "Medicine Buddha — Healing Light",
    price: 22000,
    category: "Buddha",
    material: "Brass",
    size: "Large",
    dimensions: '28" H × 16" W × 12" D',
    description: "This majestic Medicine Buddha holds a healing herb in the right hand and a lapis lazuli bowl in the left. Finished with 24k gold leaf detailing on select ornamental areas.",
    shortDescription: "Gold-detailed brass Medicine Buddha",
    image: "/static/assets/images/medicine.jpg",
    isNew: true
  },
  {
    id: 6,
    name: "Laxmi — Goddess of Wealth",
    price: 6800,
    category: "Mahakala",
    material: "Brass",
    size: "Small",
    dimensions: '7" H × 10" W × 5" D',
    description: "The sacred bull Nandi, vehicle of Lord Shiva, portrayed in a peaceful resting pose. Sand-cast using traditional Dhokra technique with a warm patina finish.",
    shortDescription: "Dhokra-cast brass Nandi bull",
    image: "/static/assets/images/laxmi.jpg",
    isNew: false
  },
  {
    id: 7,
    name: "Amoghapasa Lokeshvara — Goddess of Knowledge",
    price: 15000,
    category: "Yogini",
    material: "Brass",
    size: "Medium",
    dimensions: '18" H × 10" W × 8" D',
    description: "Saraswati seated on her lotus playing the veena, symbolizing the flow of knowledge and art. Intricate filigree work on the musical instrument and crown.",
    shortDescription: "Detailed brass Saraswati with veena",
    image: "/static/assets/images/amoghapasa.jpg",
    isNew: false
  },
  {
    id: 8,
    name: "Vajrapani",
    price: 3200,
    category: "Bodhisattva",
    material: "Stone",
    size: "Small",
    dimensions: '10" H × 4" W × 4" D',
    description: "Five carefully balanced river stones create a meditative cairn. Hand-polished and permanently bonded, bringing Zen tranquility to any space.",
    shortDescription: "Balanced river stone Zen cairn",
    image: "/static/assets/images/vajrapani.jpg",
    isNew: true
  },
  {
    id: 9,
    name: "Narupa — Abundance",
    price: 9500,
    category: "Buddha",
    material: "Wood",
    size: "Medium",
    dimensions: '12" H × 14" W × 9" D',
    description: "A jovial Laughing Buddha carved from aged teak wood, symbolizing prosperity and happiness. The warm grain of the wood enhances the Buddha's infectious smile.",
    shortDescription: "Teak wood Laughing Buddha",
    image: "/static/assets/images/narupa.jpg",
    isNew: false
  },
  {
    id: 10,
    name: "Guru — Eternal Love",
    price: 14000,
    category: "Mahakala",
    material: "Brass",
    size: "Medium",
    dimensions: '15" H × 12" W × 6" D',
    description: "A pair of peacocks with intricately detailed plumage, symbolizing love and beauty in Nepali culture. Each feather is individually engraved by master craftsmen.",
    shortDescription: "Engraved brass peacock pair",
    image: "/static/assets/images/guru.jpg",
    isNew: true
  },
  {
    id: 11,
    name: "Varasattva — Cosmic Dance",
    price: 28000,
    category: "Yogini",
    material: "Brass",
    size: "Large",
    dimensions: '30" H × 24" W × 10" D',
    description: "Lord Shiva as Nataraja performing the cosmic dance of creation and destruction, encircled by the ring of fire. A masterwork of lost-wax casting requiring over 200 hours of skilled labor.",
    shortDescription: "Monumental brass Nataraja sculpture",
    image: "/static/assets/images/vajrapani1.jpg",
    isNew: false
  },
  {
    id: 12,
    name: "Bodhisattva — Bodhisattva Form",
    price: 11500,
    category: "Bodhisattva",
    material: "Marble",
    size: "Medium",
    dimensions: '20" H × 8" W × 8" D',
    description: "A flowing Bodhisattva form inspired by the rivers of Nepal, sculpted from creamy Makwanpur marble. Contemporary design meets traditional stone-carving mastery.",
    shortDescription: "Contemporary marble Bodhisattva sculpture",
    image: "/static/assets/images/bodhisattva.jpg",
    isNew: true
  },
  {
    id: 13,
    name: "Amitabha Buddha — Infinite Light",
    price: 45000,
    category: "Buddha",
    material: "Brass",
    size: "Large",
    dimensions: '36" H × 22" W × 16" D',
    description: "Our flagship piece — a monumental Amitabha Buddha with full gold gilt finish. This museum-quality statue features the finest detailing possible in traditional Newari metalwork.",
    shortDescription: "Gold-gilt monumental Amitabha Buddha",
    image: "/static/assets/images/amitabha.jpg",
    isNew: false
  },
  {
    id: 14,
    name: "Rahula — Guardian Spirit",
    price: 2500,
    category: "Mahakala",
    material: "Resin",
    size: "Small",
    dimensions: '5" H × 9" W × 3" D',
    description: "A sleek snow leopard in a prowling stance, capturing the grace of Nepal's iconic big cat. Premium resin with hand-painted details and a stone-textured finish.",
    shortDescription: "Hand-painted resin snow leopard",
    image: "/static/assets/images/rahula.jpg",
    isNew: true
  }
];

const categories = ["Buddha", "Yogini", "Mahakala", "Bodhisattva"];
const materialsList = ["Brass", "Wood", "Marble", "Resin", "Stone"];
const sizesList = ["Small", "Medium", "Large"];

/* ---------- Utility: get current page ---------- */
function getCurrentPage() {
  const path = window.location.pathname;
  if (path.includes("gallery")) return "gallery";
  if (path.includes("about")) return "about";
  if (path.includes("contact")) return "contact";
  return "index";
}

/* ---------- Utility: get URL params ---------- */
function getParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

/* ---------- Navbar ---------- */
function initNavbar() {
  const nav = document.querySelector(".navbar");
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");
  const searchBtn = document.querySelector(".nav-search-btn");
  const searchBar = document.querySelector(".nav-search-bar");
  const searchInput = document.querySelector(".nav-search-bar input");

  // Scroll effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
  }, {
    passive: true
  });
  // Initial check
  if (window.scrollY > 50) nav.classList.add("scrolled");

  // Hamburger
  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", () => {
      mobileMenu.classList.toggle("open");
      const isOpen = mobileMenu.classList.contains("open");
      hamburger.innerHTML = isOpen ?
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>' :
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';
    });
  }

  // Search toggle
  if (searchBtn && searchBar) {
    searchBtn.addEventListener("click", () => {
      searchBar.classList.toggle("open");
      if (searchBar.classList.contains("open") && searchInput) searchInput.focus();
    });
  }

  // Highlight active nav link
  const page = getCurrentPage();
  const linkMap = {
    index: "/",
    gallery: "gallery",
    about: "about",
    contact: "contact"
  };
  document.querySelectorAll(".nav-link").forEach(link => {
    const href = link.getAttribute("href");
    if (
      (page === "index" && (href === "/" || href === "index.html")) ||
      (page !== "index" && href && href.includes(linkMap[page]))
    ) {
      link.classList.add("active");
    }
  });
}

/* ---------- Scroll Animations ---------- */
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => entry.target.classList.add("visible"), delay * 1000);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: "-50px"
  });

  document.querySelectorAll(".anim-section").forEach(el => observer.observe(el));
}

/* ---------- Product Card HTML ---------- */
function createProductCardHTML(product) {
  return `
    <div class="product-card" data-product-id="${product.id}" onclick="openModal(${product.id})">
      <div class="product-card-img-wrap">
        <img src="${product.image}" alt="${product.name}" loading="lazy" class="product-card-image">
        <div class="product-card-overlay"><span class="btn-primary">View Details</span></div>
        ${product.isNew ? '<span class="new-badge">New</span>' : ''}
      </div>
      <div class="product-card-info">
        <h3>${product.name}</h3>
        <p class="desc">${product.shortDescription}</p>
        <p class="price">NPR ${product.price.toLocaleString()}</p>
      </div>
    </div>`;
}

/* ---------- Product Modal ---------- */
function openModal(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const backdrop = document.getElementById("product-modal");
  if (!backdrop) return;

  backdrop.innerHTML = `
    <div class="modal-content" onclick="event.stopPropagation()">
      <div class="modal-grid">
        <div class="modal-img-wrap">
          <img src="${product.image}" alt="${product.name}" class="modal-img">
          ${product.isNew ? '<span class="new-badge">New Arrival</span>' : ''}
        </div>
        <div class="modal-details">
          <button class="modal-close" onclick="closeModal()" aria-label="Close modal">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
          <div style="flex:1">
            <p class="modal-meta">${product.category} · ${product.material}</p>
            <h2>${product.name}</h2>
            <div class="gold-divider" style="margin-bottom:1rem"></div>
            <p class="text-body modal-desc">${product.description}</p>
            <div class="modal-specs">
              <div><p class="spec-label">Material</p><p class="spec-value">${product.material}</p></div>
              <div><p class="spec-label">Size</p><p class="spec-value">${product.size}</p></div>
              <div class="full-width"><p class="spec-label">Dimensions</p><p class="spec-value">${product.dimensions}</p></div>
            </div>
            <p class="modal-price">NPR ${product.price.toLocaleString()}</p>
          </div>
          <a href="contact.html?product=${encodeURIComponent(product.name)}" class="btn-gold modal-inquire">Inquire Now</a>
        </div>
      </div>
    </div>`;

  requestAnimationFrame(() => backdrop.classList.add("open"));
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const backdrop = document.getElementById("product-modal");
  if (backdrop) {
    backdrop.classList.remove("open");
    document.body.style.overflow = "";
  }
}

/* ---------- Gallery: Filtering & Sorting ---------- */
let selectedCategories = [];
let selectedMaterials = [];
let selectedSizes = [];
let onlyNew = false;
let currentSort = "newest";
let searchQuery = "";

function initGallery() {
  // Pre-applied filters from URL
  const catParam = getParam("category");
  const filterParam = getParam("filter");
  if (catParam) selectedCategories = [catParam];
  if (filterParam === "new") onlyNew = true;

  renderFilters();
  renderProducts();
  initFilterPanel();

  // Search input
  const searchInput = document.querySelector(".nav-search-bar input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      renderProducts();
    });
  }

  // Scroll to grid if arriving with filters
  if (catParam || filterParam) {
    requestAnimationFrame(() => {
      const grid = document.getElementById("product-grid");
      if (grid) grid.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  }
}

function toggleFilter(value, arr) {
  const idx = arr.indexOf(value);
  if (idx > -1) arr.splice(idx, 1);
  else arr.push(value);
}

function renderFilters() {
  const container = document.getElementById("filter-controls");
  if (!container) return;

  const hasFilters = selectedCategories.length || selectedMaterials.length || selectedSizes.length || onlyNew;

  const allFilters = [
    ...categories.map(c => ({ label: c, type: 'cat', active: selectedCategories.includes(c) })),
    ...materialsList.map(m => ({ label: m, type: 'mat', active: selectedMaterials.includes(m) })),
    ...sizesList.map(s => ({ label: s, type: 'size', active: selectedSizes.includes(s) })),
    { label: 'New', type: 'new', active: onlyNew }
  ];

  container.innerHTML = `
    <div class="filter-scroll-wrapper">
      <div class="filter-scroll-track">
        ${allFilters.map(f => `
          <button class="filter-chip ${f.active ? 'active' : ''}" 
                  onclick="${f.type === 'cat' ? `toggleCat('${f.label}')` : f.type === 'mat' ? `toggleMat('${f.label}')` : f.type === 'size' ? `toggleSize('${f.label}')` : 'toggleNew()'}">
            ${f.label}
          </button>
        `).join('')}
      </div>
      <div class="filter-scroll-actions">
        ${hasFilters ? '<button class="clear-all-btn" onclick="clearAllFilters()">Clear all</button>' : ''}
        <select class="sort-select" onchange="setSort(this.value)">
          <option value="newest" ${currentSort==='newest'?'selected':''}>Newest First</option>
          <option value="oldest" ${currentSort==='oldest'?'selected':''}>Oldest First</option>
          <option value="price-low" ${currentSort==='price-low'?'selected':''}>Price: Low → High</option>
          <option value="price-high" ${currentSort==='price-high'?'selected':''}>Price: High → Low</option>
        </select>
      </div>
    </div>`;
}

function toggleCat(v) {
  toggleFilter(v, selectedCategories);
  renderFilters();
  renderProducts();
}

function toggleMat(v) {
  toggleFilter(v, selectedMaterials);
  renderFilters();
  renderProducts();
}

function toggleSize(v) {
  toggleFilter(v, selectedSizes);
  renderFilters();
  renderProducts();
}

function toggleNew() {
  onlyNew = !onlyNew;
  renderFilters();
  renderProducts();
}

function setSort(v) {
  currentSort = v;
  renderProducts();
}

function clearAllFilters() {
  selectedCategories = [];
  selectedMaterials = [];
  selectedSizes = [];
  onlyNew = false;
  searchQuery = "";
  const si = document.querySelector(".nav-search-bar input");
  if (si) si.value = "";
  renderFilters();
  renderProducts();
}

function getFilteredProducts() {
  let result = [...products];
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    result = result.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.shortDescription.toLowerCase().includes(q) ||
      p.material.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    );
  }
  if (selectedCategories.length) result = result.filter(p => selectedCategories.includes(p.category));
  if (selectedMaterials.length) result = result.filter(p => selectedMaterials.includes(p.material));
  if (selectedSizes.length) result = result.filter(p => selectedSizes.includes(p.size));
  if (onlyNew) result = result.filter(p => p.isNew);

  switch (currentSort) {
    case "price-low":
      result.sort((a, b) => a.price - b.price);
      break;
    case "price-high":
      result.sort((a, b) => b.price - a.price);
      break;
    case "oldest":
      result.sort((a, b) => a.id - b.id);
      break;
    default:
      result.sort((a, b) => b.id - a.id);
  }
  return result;
}

function renderProducts() {
  const grid = document.getElementById("product-grid-inner");
  const count = document.getElementById("product-count");
  if (!grid) return;

  const filtered = getFilteredProducts();
  if (count) count.textContent = `${filtered.length} product${filtered.length !== 1 ? 's' : ''}`;

  if (filtered.length === 0) {
    grid.innerHTML = '<div class="empty-state"><h3 class="heading-md">No products found</h3><p class="text-body">Try adjusting your filters</p></div>';
    return;
  }
  grid.innerHTML = filtered.map(p => createProductCardHTML(p)).join('');
}

/* ---------- Gallery: Filter Panel Toggle ---------- */
function initFilterPanel() {
  const fab = document.getElementById("filter-fab");
  const panel = document.getElementById("filter-panel");
  const closeBtn = document.getElementById("filter-close");
  const overlay = document.getElementById("filter-overlay");

  if (!fab || !panel) return;

  const openPanel = () => {
    panel.classList.add("open");
    if (overlay) overlay.classList.add("open");
    document.body.style.overflow = "hidden";
  };

  const closePanel = () => {
    panel.classList.remove("open");
    if (overlay) overlay.classList.remove("open");
    document.body.style.overflow = "";
  };

  fab.addEventListener("click", openPanel);
  if (closeBtn) closeBtn.addEventListener("click", closePanel);
  if (overlay) overlay.addEventListener("click", closePanel);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && panel.classList.contains("open")) {
      closePanel();
    }
  });
}

/* ---------- Carousel (Home) ---------- */
function initCarousel() {
  const track = document.getElementById("carousel-track");
  const prevBtn = document.getElementById("carousel-prev");
  const nextBtn = document.getElementById("carousel-next");
  if (!track) return;

  const newArrivals = products.filter(p => p.isNew);
  track.innerHTML = newArrivals.map(p => `<div class="carousel-item">${createProductCardHTML(p)}</div>`).join('');

  const scrollAmt = 320;
  if (prevBtn) prevBtn.addEventListener("click", () => track.scrollBy({
    left: -scrollAmt,
    behavior: "smooth"
  }));
  if (nextBtn) nextBtn.addEventListener("click", () => track.scrollBy({
    left: scrollAmt,
    behavior: "smooth"
  }));
}

/* ---------- Home: Recent Products ---------- */
function initRecentProducts() {
  const grid = document.getElementById("recent-grid");
  if (!grid) return;
  const recent = products.slice(0, 6);
  grid.innerHTML = recent.map((p, i) => createProductCardHTML(p)).join('');
}

/* ---------- Contact Form ---------- */
function initContactForm() {
  const form = document.getElementById("contact-form");
  const productSelect = document.getElementById("contact-product");
  if (!form) return;

  // Populate product dropdown
  if (productSelect) {
    products.forEach(p => {
      const opt = document.createElement("option");
      opt.value = p.name;
      opt.textContent = `${p.name} — NPR ${p.price.toLocaleString()}`;
      productSelect.appendChild(opt);
    });

    // Pre-fill from URL
    const preProduct = getParam("product");
    if (preProduct) {
      productSelect.value = preProduct;
      const msgField = document.getElementById("contact-message");
      if (msgField && !msgField.value) {
        msgField.value = `I'm interested in the "${preProduct}". Please share more details.`;
      }
    }
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    // Clear errors
    document.querySelectorAll(".form-error").forEach(el => el.textContent = "");

    const name = form.querySelector('[name="name"]').value.trim();
    const email = form.querySelector('[name="email"]').value.trim();
    const message = form.querySelector('[name="message"]').value.trim();
    let valid = true;

    if (!name) {
      document.getElementById("err-name").textContent = "Name is required";
      valid = false;
    }
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      document.getElementById("err-email").textContent = "Valid email is required";
      valid = false;
    }
    if (!message) {
      document.getElementById("err-message").textContent = "Message is required";
      valid = false;
    }

    if (valid) {
      form.style.display = "none";
      document.getElementById("thank-you").style.display = "block";
    }
  });
}

/* ---------- Init on DOMContentLoaded ---------- */
document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initScrollAnimations();

  const page = getCurrentPage();
  if (page === "index") {
    initCarousel();
    initRecentProducts();
  }
  if (page === "gallery") {
    initGallery();
  }
  if (page === "contact") {
    initContactForm();
  }

  // Modal backdrop click to close
  const modal = document.getElementById("product-modal");
  if (modal) {
    modal.addEventListener("click", closeModal);
  }

  // Escape key to close modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
});