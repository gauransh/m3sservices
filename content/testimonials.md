---
title: "Testimonials"
date: 2024-04-30T12:00:00+00:00
draft: false
description: "Hear What Our Clients Say & See Who Trusts M3S Services"
featured_image: "../assets/images/defaults/about_us.jpg"
---

<style>
/* Basic styling for the marquee (logo strip) */
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

/* A nice large style for prominent quotes */
.featured-quote {
  font-size: 1.5rem; /* ~ text-2xl */
  font-weight: 600;
  line-height: 1.6;
  margin-bottom: 1rem;
  color: #fff;
  text-align: center;
  font-style: italic;
}

/* Standard quotes in columns */
.quote-box {
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 1rem;
  font-style: italic;
  line-height: 1.5;
}

/* For author name below quotes */
.quote-author {
  display: block;
  margin-top: 0.5rem;
  font-size: 0.875rem; /* ~ text-sm */
  font-weight: 600;
  color: #b3b3b3; /* or text-gray-400 */
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
</style>

<!-- Main Container -->
<div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center text-white my-8">
  <!-- Client Logos in a marquee at top -->
  <div class="mb-12">
    <div class="marquee bg-gradient-to-r from-pink-500 to-purple-500 rounded-md shadow p-4 overflow-hidden inline-block">
      <div id="marqueeContent">
        <a href="https://aurva.io" target="_blank" rel="noopener" class="logo-link transition hover:opacity-80">
          <img 
            src="https://m3sservices.s3.us-east-1.amazonaws.com/aurva.png"
            alt="Aurva.io"
            class="h-16 w-auto object-contain"
          >
        </a>
        <a href="https://fyler.us" target="_blank" rel="noopener" class="logo-link transition hover:opacity-80">
          <img 
            src="https://m3sservices.s3.us-east-1.amazonaws.com/fyler.png"
            alt="Fyler.us"
            class="h-16 w-auto object-contain"
          >
        </a>
        <a href="https://crio.do" target="_blank" rel="noopener" class="logo-link transition hover:opacity-80">
          <img 
            src="https://m3sservices.s3.us-east-1.amazonaws.com/crio_do.png"
            alt="Crio.do"
            class="h-16 w-auto object-contain"
          >
        </a>
      </div>
    </div>
    <p class="mt-4 text-gray-300 max-w-lg mx-auto">
      <em>
        From visionary startups to established enterprises, clients around the globe trust M3S Services 
        to deliver forward-thinking solutions.
      </em>
    </p>
  </div>

  <!-- Dynamic quotes in a multi-column grid -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
    <!-- Big/Featured quote that spans both columns -->
    <div class="md:col-span-2 bg-pink-600 bg-opacity-10 p-6 rounded-lg">
      <p class="featured-quote">
        “The GenAI pipeline developed by M3S slashed our SEC filing overhead by 40%. 
        Their in-house language models and automation significantly accelerated 
        our growth and streamlined our operations.”
      </p>
      <span class="quote-author">Cory Skerl, CEO, Fyler.us</span>
    </div>
    <!-- Smaller quotes side by side -->
    <div>
      <div class="quote-box">
        “M3S's talent acquisition services were instrumental in building our AI team. 
        Their BERT-based PII detection improvements reduced churn by 18%, 
        giving us peace of mind around data security.”
      </div>
      <span class="quote-author">Apurv Gupta, CEO, Aurva.io</span>
    </div>
    <div>
      <div class="quote-box">
        “We integrated LLM workflows for content personalization, 
        helping us develop AI-driven chatbots and custom courses. M3S 
        has been a pivotal partner in our GenAI journey at Crio.do.”
      </div>
      <span class="quote-author">Kiran Suresh, Head of Product, Crio.do</span>
    </div>
  </div>
  <!-- Final CTA -->
  <div class="mt-12">
    <p class="text-gray-300 mb-3 text-lg">
      Ready to experience these results for your own business?
    </p>
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

</div> <!-- end main container -->
