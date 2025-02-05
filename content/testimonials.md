---
title: "Testimonials"
date: 2024-04-30T12:00:00+00:00
draft: false
description: "Hear What Our Clients Say & See Who Trusts M3S Services"
featured_image: "../assets/images/defaults/about_us.jpg"
---

<!-- MapLibre GL CSS -->
<link
  href="https://unpkg.com/maplibre-gl@2.4.0/dist/maplibre-gl.css"
  rel="stylesheet"
/>

<style>
/* ----- MARQUEE & TESTIMONIALS STYLES ----- */
#marqueeContent {
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
  animation: slideLeft 10s linear infinite;
}
@keyframes slideLeft {
  0%   { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
}
.logo-link {
  margin-right: 3rem;
}
.featured-quote {
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.6;
  margin-bottom: 1rem;
  color: #fff;
  text-align: center;
  font-style: italic;
}
.quote-box {
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 1rem;
  font-style: italic;
  line-height: 1.5;
}
.quote-author {
  display: block;
  margin-top: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: #b3b3b3;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Larger marquee container / styles */
#marqueeContainer {
  position: relative;
  overflow: hidden;
  width: 100%;
  background-color: #1f2937; 
  border-radius: 0.5rem; 
  padding: 1rem;
}
#marqueeContent {
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
  animation: slideLeft 15s linear infinite;
}
@keyframes slideLeft {
  0%   { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
}
#marqueeContainer:hover #marqueeContent {
  animation-play-state: paused;
}
.logo-link {
  margin-right: 2rem;
  flex-shrink: 0;
}
.logo-img {
  height: 64px;
  width: auto;
  object-fit: contain;
}

/* ----- MAP SECTION STYLES ----- */
#mapContainer {
  width: 100%;
  height: 500px;
  margin: 2rem auto;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #ddd;
}
.maplibregl-popup {
  max-width: 300px;
}
.maplibregl-popup-content {
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  border-radius: 4px;
  padding: 10px 15px;
  font-family: system-ui, -apple-system, sans-serif;
  font-size: 14px;
}
.maplibregl-popup-tip {
  border-top-color: rgba(0, 0, 0, 0.8) !important;
}
.maplibregl-popup-close-button {
  color: #fff;
}

/* Custom marker styling */
.marker {
  width: 15px;
  height: 15px;
  background-color: #0074D9; /* classy blue color */
  border: 2px solid #fff;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
}
.marker:hover {
  transform: scale(1.2);
}
</style>


<section class="bg-gray-50 py-8 sm:py-12">
  <div class="max-w-7xl mx-auto px-4 text-center">
    <h2 class="text-2xl font-bold text-gray-400 mb-6">Trusted By</h2>
    <div class="overflow-hidden relative">
        <div id="marqueeContent">
          <!-- 1. Aimbridge Hospitality (USA) -->
          <a href="https://www.aimbridgehospitality.com" target="_blank" rel="noopener" class="logo-link">
            <img 
              src="https://pub-63c6a647b6f740e885a4d0b9305248e3.r2.dev/defaults/aimbridg.png"
              alt="Aimbridge Hospitality (USA)"
              class="logo-img"
            >
          </a>
          <!-- 2. Apple Hospitality Reit (USA) -->
          <a href="https://applehospitalityreit.com/" target="_blank" rel="noopener" class="logo-link">
            <img 
              src="https://pub-63c6a647b6f740e885a4d0b9305248e3.r2.dev/defaults/apple_hospitality.png"
              alt="Aimbridge Hospitality (USA)"
              class="logo-img"
            >
          </a>
          <!-- 3. Ascendas Pte Ltd. (Singapore) -->
          <a href="https://www.capitaland-ascendasreit.com/en/our-portfolio/singapore.html" target="_blank" rel="noopener" class="logo-link">
            <img 
              src="https://pub-63c6a647b6f740e885a4d0b9305248e3.r2.dev/defaults/ascendas.png"
              alt="Ascendas Pte Ltd. (Singapore)"
              class="logo-img"
            >
          </a>
          <!-- 4. Aurva.io (with invert filter example) -->
          <a href="https://aurva.io" target="_blank" rel="noopener" class="logo-link transition hover:opacity-80">
            <img 
              src="https://pub-63c6a647b6f740e885a4d0b9305248e3.r2.dev/defaults/aurva.png"
              alt="Aurva.io"
              class="logo-img"
            >
          </a>
          <!-- 5. BPEA Singapore (Singapore) -->
          <a href="https://www.bpea.com.sg/" target="_blank" rel="noopener" class="logo-link">
            <img 
              src="https://pub-63c6a647b6f740e885a4d0b9305248e3.r2.dev/defaults/bpea.png"
              alt="BPEA Singapore (Singapore)"
              class="logo-img"
            >
          </a>
          <!-- 6. Crio.do (with invert filter example) -->
          <a style="filter: invert(100%);" href="https://crio.do" target="_blank" rel="noopener" class="logo-link transition hover:opacity-100">
            <img 
              src="https://pub-63c6a647b6f740e885a4d0b9305248e3.r2.dev/defaults/crio_do.png"
              alt="Crio.do"
              class="logo-img"
            >
          </a>
          <!-- 7. Daiwa House Industry Co. Ltd. (Japan) -->
          <a href="https://www.daiwa-house.co.jp/en/index.html" target="_blank" rel="noopener" class="logo-link">
            <img 
              src="https://pub-63c6a647b6f740e885a4d0b9305248e3.r2.dev/defaults/daiwa_house.png"
              alt="Daiwa House Industry Co. Ltd. (Japan)"
              class="logo-img"
            >
          </a>
          <!-- 8. DLF Limited (India) -->
          <a href="https://www.dlf.in" target="_blank" rel="noopener" class="logo-link">
            <img 
              src="https://pub-63c6a647b6f740e885a4d0b9305248e3.r2.dev/defaults/dlf.png"
              alt="DLF Limited (India)"
              class="logo-img"
            >
          </a>
          <!-- 9. Gaw Capital Partners (Hong Kong) -->
          <a href="https://www.gawcapital.com" target="_blank" rel="noopener" class="logo-link">
            <img 
              src="https://pub-63c6a647b6f740e885a4d0b9305248e3.r2.dev/defaults/gaw.png"
              alt="Gaw Capital Partners (Hong Kong)"
              class="logo-img"
            >
          </a>
          <!-- 10. Fyler.us (invert example) -->
          <a href="https://fyler.us" target="_blank" rel="noopener" class="logo-link">
            <img 
              src="https://pub-63c6a647b6f740e885a4d0b9305248e3.r2.dev/defaults/fyler.png"
              alt="Fyler.us"
              class="logo-img"
            >
          </a>
          <!-- 11. Lowe Enterprises (USA) -->
          <a href="https://www.lowe-re.com" target="_blank" rel="noopener" class="logo-link">
            <img 
              src="https://pub-63c6a647b6f740e885a4d0b9305248e3.r2.dev/defaults/lowes.png"
              alt="Lowe Enterprises (USA)"
              class="logo-img"
            >
          </a>
          <!-- 12. Standard Hotels (Singapore) -->
          <a href="https://www.standardhotels.com" target="_blank" rel="noopener" class="logo-link">
            <img 
              src="https://pub-63c6a647b6f740e885a4d0b9305248e3.r2.dev/defaults/standard_hotels.png"
              alt="Standard Hotels (Singapore)"
              class="logo-img"
            >
          </a>
          <!-- 13. Seibu Prince Hotels and Resorts (Japan) -->
          <a href="https://www.princehotels.com" target="_blank" rel="noopener" class="logo-link">
            <img 
              src="https://pub-63c6a647b6f740e885a4d0b9305248e3.r2.dev/defaults/seibu_prince.png"
              alt="Seibu Prince Hotels and Resorts (Japan)"
              class="logo-img"
            >
          </a>
          <!-- 14. Symphony International Holdings (Singapore) -->
          <a href="https://www.symphonyasia.com" target="_blank" rel="noopener" class="logo-link">
            <img 
              src="https://pub-63c6a647b6f740e885a4d0b9305248e3.r2.dev/defaults/symphony.png"
              alt="Symphony International Holdings (Singapore)"
              class="logo-img"
            >
          </a>
          <!-- 15. Wyndham Hotels & Resorts (USA) -->
          <a href="https://www.wyndhamhotels.com" target="_blank" rel="noopener" class="logo-link">
            <img 
               src="https://pub-63c6a647b6f740e885a4d0b9305248e3.r2.dev/defaults/wyndham.png"
              alt="Wyndham Hotels & Resorts (USA)"
              class="logo-img"
            >
          </a>
        </div>
      </div>
    </div>
</section>

<div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
  <div class="md:col-span-2 bg-pink-600 bg-opacity-10 p-6 rounded-lg">
    <p class="featured-quote">
      "M3S engineered an end-to-end SEC automation system that reduced our 8-K filing prep from 12 hours to 90 minutes. Their AI pipeline auto-generates draft disclosures using our historical data while maintaining compliance with EDGAR formatting rules. We've filed many error-free reports since implementation – including three last-minute material event disclosures that would’ve previously required all-nighters."
    </p>
    <span class="quote-author text-center">Parth Bhatia, Founder, Fyler.us</span>
  </div>
  <div>
    <div class="quote-box">
      "During our seed investment crunch, M3S single-handedly helped us build our AI engineering team while simultaneously upgrading our PII detection system. Their hybrid BERT-CRF model achieved 98.7% recall on sensitive data identification – a 22% improvement over our legacy system. This translated to zero security incidents for 14 consecutive months and an 18% boost in client retention."
    </div>
    <span class="quote-author text-center">Apurv Garg, CEO, Aurva.io</span>
  </div>
  <div>
    <div class="quote-box">
      "When M3S said they'd help 'rethink developer education,' we didn't expect AI Teaching Assistants that adapt to learning styles. From brainstorming AI-driven plagiarism checks for our FDT buildouts to contributing valuable insights on the ‘AI Tools for Developers’ curriculum, they’ve helped us integrate LLM workflows for content personalization and chatbot development. They also provided hands-on guidance in exploring Azure Cognitive Search and Azure OpenAI-based solutions."
    </div>
    <span class="quote-author text-center">Kiran Suresh, Head of Product, Crio.do</span>
  </div>
</div>

<div class="mb-12 text-left max-w-xl mx-auto text-gray-300">
  <h2 class="text-2xl font-bold text-center mb-4 text-white">Our Clients</h2>
  <ul class="list-disc list-inside space-y-1 text-center text-lg">
    <li>Aimbridge Hospitality (USA)</li>
    <li>Apple Hospitality Reit (USA)</li>
    <li>Ascendas Pte Ltd. (Singapore)</li>
    <li>Aurva.io (USA)</li>
    <li>BPEA Singapore (Singapore)</li>
    <li>Crio.do (India)</li>
    <li>Daiwa House Industry Co. Ltd. (Japan)</li>
    <li>DLF Limited (India)</li>
    <li>Gaw Capital Partners (Hong Kong)</li>
    <li>Fyler.us (USA)</li>
    <li>Lowe Enterprises (USA)</li>
    <li>Standard Hotels (Singapore)</li>
    <li>Seibu Prince Hotels and Resorts (Japan)</li>
    <li>Symphony International Holdings (Singapore)</li>
    <li>The Ascott Ltd. (Singapore)</li>
    <li>Wyndham Hotels & Resorts (USA)</li>
  </ul>
</div>

<!-- Map container -->
<div id="mapContainer"></div>

<!-- CTA -->
<section class="bg-section-slight py-12 text-center">
  <div class="mx-auto max-w-3xl">
    <h2 class="text-2xl sm:text-3xl font-bold text-white">Let's Innovate Together</h2>
    <p class="mt-3 text-gray-300">
      Ready to experience these results for your own business?
    </p>
    <div class="mt-8">
      <a
      href="https://cal.com/m3sservices/30min"
      target="_blank"
      rel="noopener"
      class="inline-block rounded-md bg-gradient-to-r from-pink-500 to-purple-500 
             px-6 py-3 text-sm font-semibold text-white transition 
             hover:from-purple-500 hover:to-pink-500 focus-visible:outline-none 
             focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2"
      >
        Book a Call
      </a>
    </div>
  </div>
</section>

<!-- MapLibre GL JS (2D Map) -->
<script src="https://unpkg.com/maplibre-gl@2.4.0/dist/maplibre-gl.js"></script>

<script>
// Define companies with lat/lng
const companies = [
  { name: "Aimbridge Hospitality (USA)", lat: 40.7128, lng: -74.0060 },
  { name: "Apple Hospitality Reit (USA)", lat: 34.0522, lng: -118.2437 },
  { name: "Ascendas Pte Ltd. (Singapore)", lat: 1.3521, lng: 103.8198 },
  { name: "Aurva.io (USA)", lat: 41.8781, lng: -87.6298 },
  { name: "BPEA Singapore (Singapore)", lat: 1.3521, lng: 103.8198 },
  { name: "Crio.do (India)", lat: 12.9716, lng: 77.5946 },
  { name: "Daiwa House Industry Co. Ltd. (Japan)", lat: 35.6895, lng: 139.6917 },
  { name: "DLF Limited (India)", lat: 28.6139, lng: 77.2090 },
  { name: "Gaw Capital Partners (Hong Kong)", lat: 22.3193, lng: 114.1694 },
  { name: "Fyler.us (USA)", lat: 37.7749, lng: -122.4194 },
  { name: "Lowe Enterprises (USA)", lat: 29.7604, lng: -95.3698 },
  { name: "Standard Hotels (Singapore)", lat: 1.3521, lng: 103.8198 },
  { name: "Seibu Prince Hotels and Resorts (Japan)", lat: 34.6937, lng: 135.5023 },
  { name: "Symphony International Holdings (Singapore)", lat: 1.3521, lng: 103.8198 },
  { name: "The Ascott Ltd. (Singapore)", lat: 1.3521, lng: 103.8198 },
  { name: "Wyndham Hotels & Resorts (USA)", lat: 25.7617, lng: -80.1918 }
];

// Initialize MapLibre with Carto's Positron style
const map = new maplibregl.Map({
  container: 'mapContainer',
  style: 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json',
  center: [0, 20],
  zoom: 1.5,
  pitch: 0,
  bearing: 0
});

// Keep track of the currently open popup
let currentPopup = null;

map.on('load', () => {
  // Add markers for each company
  companies.forEach(company => {
    // create marker DOM element
    const el = document.createElement('div');
    el.className = 'marker'; // styled in CSS

    // create popup
    const popup = new maplibregl.Popup({
      closeButton: false,
      closeOnClick: false,
      offset: 25
    }).setHTML(company.name);

    // place the marker
    new maplibregl.Marker(el)
      .setLngLat([company.lng, company.lat])
      .addTo(map);

    // click to toggle popup
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      if (currentPopup === popup) {
        popup.remove();
        currentPopup = null;
      } else {
        if (currentPopup) {
          currentPopup.remove();
        }
        popup.setLngLat([company.lng, company.lat]).addTo(map);
        currentPopup = popup;
      }
    });
  });

  // Fit map bounds to show all markers
  const bounds = new maplibregl.LngLatBounds();
  companies.forEach(c => bounds.extend([c.lng, c.lat]));
  map.fitBounds(bounds, { padding: 50 });
});

// Close popup if clicking on empty map space
map.on('click', () => {
  if (currentPopup) {
    currentPopup.remove();
    currentPopup = null;
  }
});

// Optional: add navigation controls (zoom/pan)
map.addControl(new maplibregl.NavigationControl());
</script>
