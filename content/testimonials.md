---
title: "Testimonials"
date: 2024-04-30T12:00:00+00:00
draft: false
description: "Hear What Our Clients Say & See Who Trusts M3S Services"
featured_image: "../assets/images/defaults/about_us.jpg"
---

<style>
/* Marquee styles for the logo strip */
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

/* Larger quotes, optional snippet from previous example */
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
</style>

<style>
  /* Remove fixed height; let the container size to its contents */
  #marqueeContainer {
    position: relative;
    /* height: 80px;  <-- Removed this line */
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
    animation: slideLeft 15s linear infinite; /* Slower to see on mobile */
  }
  
  @keyframes slideLeft {
    0%   { transform: translateX(100%); }
    100% { transform: translateX(-100%); }
  }
  
  /* On hover (desktop), pause animation; optional for mobile */
  #marqueeContainer:hover #marqueeContent {
    animation-play-state: paused;
  }
  
  /* Adjust margin between logos */
  .logo-link {
    margin-right: 2rem;
    flex-shrink: 0; /* ensures logos don't shrink on small screens */
  }
  
  /* Scale logos slightly smaller for mobile if they feel too big */
  .logo-img {
    height: 64px;    /* or 4rem */
    width: auto;
    object-fit: contain;
  }
  </style>
  
  <section class="bg-section-dark py-8 sm:py-12 text-center">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Container now uses an ID so we can style it with the updated CSS -->
      <div class="marquee bg-gradient-to-r from-pink-500 to-purple-500 rounded-md shadow p-4 overflow-hidden">
        <h2 class="text-2xl font-bold text-white mb-4">Trusted By</h2>
        <div id="marqueeContent">
          <!-- 1. Aimbridge Hospitality (USA) -->
          <a href="https://www.aimbridgehospitality.com" target="_blank" rel="noopener" class="logo-link">
            <img 
              src="https://m3sservices.s3.us-east-1.amazonaws.com/aimbridg.png"
              alt="Aimbridge Hospitality (USA)"
              class="logo-img"
            >
          </a>
          <!-- 2. Apple Hospitality Reit (USA) -->
          <a href="https://applehospitalityreit.com/" target="_blank" rel="noopener" class="logo-link">
            <img 
              src="https://m3sservices.s3.us-east-1.amazonaws.com/apple_hospitality.png"
              alt="Aimbridge Hospitality (USA)"
              class="logo-img"
            >
          </a>
          <!-- 3. Ascendas Pte Ltd. (Singapore) -->
          <a href="https://www.capitaland-ascendasreit.com/en/our-portfolio/singapore.html" target="_blank" rel="noopener" class="logo-link">
            <img 
              src="https://m3sservices.s3.us-east-1.amazonaws.com/ascendas.png"
              alt="Ascendas Pte Ltd. (Singapore)"
              class="logo-img"
            >
          </a>
          <!-- 4. Aurva.io (with invert filter example) -->
          <a href="https://aurva.io" target="_blank" rel="noopener" class="logo-link transition hover:opacity-80">
            <img 
              src="https://m3sservices.s3.us-east-1.amazonaws.com/aurva.png"
              alt="Aurva.io"
              class="logo-img"
            >
          </a>
          <!-- 5. BPEA Singapore (Singapore) -->
          <a href="https://www.bpea.com.sg/" target="_blank" rel="noopener" class="logo-link">
            <img 
              src="https://m3sservices.s3.us-east-1.amazonaws.com/bpea.png"
              alt="BPEA Singapore (Singapore)"
              class="logo-img"
            >
          </a>
          <!-- 6. Crio.do (with invert filter example) -->
          <a style="filter: invert(100%);" href="https://crio.do" target="_blank" rel="noopener" class="logo-link transition hover:opacity-100">
            <img 
              src="https://m3sservices.s3.us-east-1.amazonaws.com/crio_do.png"
              alt="Crio.do"
              class="logo-img"
            >
          </a>
          <!-- 7. Daiwa House Industry Co. Ltd. (Japan) -->
          <a href="https://www.daiwa-house.co.jp/en/index.html" target="_blank" rel="noopener" class="logo-link">
            <img 
              src="https://m3sservices.s3.us-east-1.amazonaws.com/daiwa_house.png"
              alt="Daiwa House Industry Co. Ltd. (Japan)"
              class="logo-img"
            >
          </a>
          <!-- 8. DLF Limited (India) -->
          <a href="https://www.dlf.in" target="_blank" rel="noopener" class="logo-link">
            <img 
              src="https://m3sservices.s3.us-east-1.amazonaws.com/dlf.png"
              alt="DLF Limited (India)"
              class="logo-img"
            >
          </a>
          <!-- 9. Gaw Capital Partners (Hong Kong) -->
          <a href="https://www.gawcapital.com" target="_blank" rel="noopener" class="logo-link">
            <img 
              src="https://m3sservices.s3.us-east-1.amazonaws.com/gaw.png"
              alt="Gaw Capital Partners (Hong Kong)"
              class="logo-img"
            >
          </a>
          <!-- 10. Fyler.us (invert example) -->
          <a href="https://fyler.us" target="_blank" rel="noopener" class="logo-link">
            <img 
              src="https://m3sservices.s3.us-east-1.amazonaws.com/fyler.png"
              alt="Fyler.us"
              class="logo-img"
            >
          </a>
          <!-- 11. Lowe Enterprises (USA) -->
          <a href="https://www.lowe-re.com" target="_blank" rel="noopener" class="logo-link">
            <img 
              src="https://m3sservices.s3.us-east-1.amazonaws.com/lowes.png"
              alt="Lowe Enterprises (USA)"
              class="logo-img"
            >
          </a>
          <!-- 12. Standard Hotels (Singapore) -->
          <a href="https://www.standardhotels.com" target="_blank" rel="noopener" class="logo-link">
            <img 
              src="https://m3sservices.s3.us-east-1.amazonaws.com/standard_hotels.png"
              alt="Standard Hotels (Singapore)"
              class="logo-img"
            >
          </a>
          <!-- 13. Seibu Prince Hotels and Resorts (Japan) -->
          <a href="https://www.princehotels.com" target="_blank" rel="noopener" class="logo-link">
            <img 
              src="https://m3sservices.s3.us-east-1.amazonaws.com/seibu_prince.png"
              alt="Seibu Prince Hotels and Resorts (Japan)"
              class="logo-img"
            >
          </a>
          <!-- 14. Symphony International Holdings (Singapore) -->
          <a href="https://www.symphonyasia.com" target="_blank" rel="noopener" class="logo-link">
            <img 
              src="https://m3sservices.s3.us-east-1.amazonaws.com/symphony.png"
              alt="Symphony International Holdings (Singapore)"
              class="logo-img"
            >
          </a>
          <!-- 15. Wyndham Hotels & Resorts (USA) -->
          <a href="https://www.wyndhamhotels.com" target="_blank" rel="noopener" class="logo-link">
            <img 
               src="https://m3sservices.s3.us-east-1.amazonaws.com/wyndham.png"
              alt="Wyndham Hotels & Resorts (USA)"
              class="logo-img"
            >
          </a>
        </div>
      </div>
    </div>
</section>
  


  <!-- Dynamic quotes in a multi-column grid (example from previous layout) -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
    <!-- Featured quote spanning both columns -->
    <div class="md:col-span-2 bg-pink-600 bg-opacity-10 p-6 rounded-lg">
      <p class="featured-quote">
        “The GenAI pipeline developed by M3S slashed our SEC filing overhead by 40%. 
        Their in-house language models and automation significantly accelerated 
        our growth and streamlined our operations.”
      </p>
      <span class="quote-author text-center">Cory Skerl, CEO, Fyler.us</span>
    </div>
    <!-- Example smaller quotes side by side -->
    <div>
      <div class="quote-box">
        “M3S's talent acquisition services were instrumental in building our AI team. 
        Their BERT-based PII detection improvements reduced churn by 18%, 
        giving us peace of mind around data security.”
      </div>
      <span class="quote-author text-center">Apurv Garg, CEO, Aurva.io</span>
    </div>
    <div>
      <div class="quote-box">
        “We integrated LLM workflows for content personalization, 
        helping us develop AI-driven chatbots and custom courses. M3S 
        has been a pivotal partner in our GenAI journey at Crio.do.”
      </div>
      <span class="quote-author text-center">Kiran Suresh, Head of Product, Crio.do</span>
    </div>
    </div>
  </div>
  <!-- New: Additional references/partnerships list -->
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
</div>
</div>

<style>
  /* Remove fixed height; let the container size to its contents */
  #marqueeContainer {
    position: relative;
    /* height: 80px;  <-- Removed this line */
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
    animation: slideLeft 15s linear infinite; /* Slower to see on mobile */
  }
  
  @keyframes slideLeft {
    0%   { transform: translateX(100%); }
    100% { transform: translateX(-100%); }
  }
  
  /* On hover (desktop), pause animation; optional for mobile */
  #marqueeContainer:hover #marqueeContent {
    animation-play-state: paused;
  }
  
  /* Adjust margin between logos */
  .logo-link {
    margin-right: 2rem;
    flex-shrink: 0; /* ensures logos don't shrink on small screens */
  }
  
  /* Scale logos slightly smaller for mobile if they feel too big */
  .logo-img {
    height: 64px;    /* or 4rem */
    width: auto;
    object-fit: contain;
  }
  </style>
  
  <section class="bg-section-dark py-8 sm:py-12 text-center">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Container now uses an ID so we can style it with the updated CSS -->
      <div class="marquee bg-gradient-to-r from-pink-500 to-purple-500 rounded-md shadow p-4 overflow-hidden">
                <div id="marqueeContent">
          <!-- 1. Aimbridge Hospitality (USA) -->
          <a href="https://www.aimbridgehospitality.com" target="_blank" rel="noopener" class="logo-link">
            <img 
              src="https://m3sservices.s3.us-east-1.amazonaws.com/aimbridg.png"
              alt="Aimbridge Hospitality (USA)"
              class="logo-img"
            >
          </a>
          <!-- 2. Apple Hospitality Reit (USA) -->
          <a href="https://applehospitalityreit.com/" target="_blank" rel="noopener" class="logo-link">
            <img 
              src="https://m3sservices.s3.us-east-1.amazonaws.com/apple_hospitality.png"
              alt="Aimbridge Hospitality (USA)"
              class="logo-img"
            >
          </a>
          <!-- 3. Ascendas Pte Ltd. (Singapore) -->
          <a href="https://www.capitaland-ascendasreit.com/en/our-portfolio/singapore.html" target="_blank" rel="noopener" class="logo-link">
            <img 
              src="https://m3sservices.s3.us-east-1.amazonaws.com/ascendas.png"
              alt="Ascendas Pte Ltd. (Singapore)"
              class="logo-img"
            >
          </a>
          <!-- 4. Aurva.io (with invert filter example) -->
          <a href="https://aurva.io" target="_blank" rel="noopener" class="logo-link transition hover:opacity-80">
            <img 
              src="https://m3sservices.s3.us-east-1.amazonaws.com/aurva.png"
              alt="Aurva.io"
              class="logo-img"
            >
          </a>
          <!-- 5. BPEA Singapore (Singapore) -->
          <a href="https://www.bpea.com.sg/" target="_blank" rel="noopener" class="logo-link">
            <img 
              src="https://m3sservices.s3.us-east-1.amazonaws.com/bpea.png"
              alt="BPEA Singapore (Singapore)"
              class="logo-img"
            >
          </a>
          <!-- 6. Crio.do (with invert filter example) -->
          <a style="filter: invert(100%);" href="https://crio.do" target="_blank" rel="noopener" class="logo-link transition hover:opacity-100">
            <img 
              src="https://m3sservices.s3.us-east-1.amazonaws.com/crio_do.png"
              alt="Crio.do"
              class="logo-img"
            >
          </a>
          <!-- 7. Daiwa House Industry Co. Ltd. (Japan) -->
          <a href="https://www.daiwa-house.co.jp/en/index.html" target="_blank" rel="noopener" class="logo-link">
            <img 
              src="https://m3sservices.s3.us-east-1.amazonaws.com/daiwa_house.png"
              alt="Daiwa House Industry Co. Ltd. (Japan)"
              class="logo-img"
            >
          </a>
          <!-- 8. DLF Limited (India) -->
          <a href="https://www.dlf.in" target="_blank" rel="noopener" class="logo-link">
            <img 
              src="https://m3sservices.s3.us-east-1.amazonaws.com/dlf.png"
              alt="DLF Limited (India)"
              class="logo-img"
            >
          </a>
          <!-- 9. Gaw Capital Partners (Hong Kong) -->
          <a href="https://www.gawcapital.com" target="_blank" rel="noopener" class="logo-link">
            <img 
              src="https://m3sservices.s3.us-east-1.amazonaws.com/gaw.png"
              alt="Gaw Capital Partners (Hong Kong)"
              class="logo-img"
            >
          </a>
          <!-- 10. Fyler.us (invert example) -->
          <a href="https://fyler.us" target="_blank" rel="noopener" class="logo-link">
            <img 
              src="https://m3sservices.s3.us-east-1.amazonaws.com/fyler.png"
              alt="Fyler.us"
              class="logo-img"
            >
          </a>
          <!-- 11. Lowe Enterprises (USA) -->
          <a href="https://www.lowe-re.com" target="_blank" rel="noopener" class="logo-link">
            <img 
              src="https://m3sservices.s3.us-east-1.amazonaws.com/lowes.png"
              alt="Lowe Enterprises (USA)"
              class="logo-img"
            >
          </a>
          <!-- 12. Standard Hotels (Singapore) -->
          <a href="https://www.standardhotels.com" target="_blank" rel="noopener" class="logo-link">
            <img 
              src="https://m3sservices.s3.us-east-1.amazonaws.com/standard_hotels.png"
              alt="Standard Hotels (Singapore)"
              class="logo-img"
            >
          </a>
          <!-- 13. Seibu Prince Hotels and Resorts (Japan) -->
          <a href="https://www.princehotels.com" target="_blank" rel="noopener" class="logo-link">
            <img 
              src="https://m3sservices.s3.us-east-1.amazonaws.com/seibu_prince.png"
              alt="Seibu Prince Hotels and Resorts (Japan)"
              class="logo-img"
            >
          </a>
          <!-- 14. Symphony International Holdings (Singapore) -->
          <a href="https://www.symphonyasia.com" target="_blank" rel="noopener" class="logo-link">
            <img 
              src="https://m3sservices.s3.us-east-1.amazonaws.com/symphony.png"
              alt="Symphony International Holdings (Singapore)"
              class="logo-img"
            >
          </a>
          <!-- 15. Wyndham Hotels & Resorts (USA) -->
          <a href="https://www.wyndhamhotels.com" target="_blank" rel="noopener" class="logo-link">
            <img 
               src="https://m3sservices.s3.us-east-1.amazonaws.com/wyndham.png"
              alt="Wyndham Hotels & Resorts (USA)"
              class="logo-img"
            >
          </a>
        </div>
      </div>
    </div>

<section class="bg-section-slight py-12 text-center">
  <div class="mx-auto max-w-3xl">
    <h2 class="text-2xl sm:text-3xl font-bold text-white">Let’s Innovate Together</h2>
    <p class="mt-3 text-gray-300">
      Ready to experience these results for your own business?
    </p>
    <div class="mt-8">
      <a
      href="https://cal.com/m3sservices/30min?month=2025-01&date=2025-01-27"
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