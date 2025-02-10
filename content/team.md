---
title: "Our Team"
date: 2024-04-30T12:00:00+00:00
draft: false
description: "Meet the Leaders Driving M3S Services Forward"
featured_image: "../assets/images/defaults/about_us.jpg"
---

> Our leadership combines decades of experience in AI, business operations, and strategic investments. Meet the people guiding M3S Services to shape the future of global consulting.
<style>
      :root {
        /* Default fallback values */
        --content-width: 1000px;
        --duration: 20s;
      }

      /* ----- MARQUEE & COMPANY LOGO STYLES ----- */
      #marqueeContainer {
        position: relative;
        overflow: hidden;
        width: 100%;
        background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
        border-radius: 0.75rem;
        padding: 1.25rem 0;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
          0 2px 4px -1px rgba(0, 0, 0, 0.06);
      }

      /* The marqueeContent holds a single set of logos */
      #marqueeContent {
        display: inline-flex;
        align-items: center;
        white-space: nowrap;
        /* Animate from off-screen right to off-screen left */
        animation: slide var(--duration) linear infinite;
      }

      /* Keyframes: start with logos completely off the right edge (100%)
         and move to completely off the left edge (–[total content width]). */
      @keyframes slide {
        0% {
          transform: translateX(100%);
        }
        100% {
          transform: translateX(calc(-1 * var(--content-width)));
        }
      }

      .logo-link {
        margin-right: 3rem;
        flex-shrink: 0;
        opacity: 0.8;
        transition: transform 0.2s ease, opacity 0.2s ease;
      }

      .logo-link:hover {
        opacity: 1;
        transform: scale(1.05);
      }

      .logo-img {
        height: 40px;
        width: auto;
        object-fit: contain;
        filter: brightness(0.8) contrast(1.1);
        transition: filter 0.2s ease;
      }

      .logo-img:hover {
        filter: brightness(1) contrast(1.2);
      }

      /* Fade edges for a smoother visual effect */
      #marqueeContainer::before,
      #marqueeContainer::after {
        content: '';
        position: absolute;
        top: 0;
        width: 50px;
        height: 100%;
        z-index: 2;
      }

      #marqueeContainer::before {
        left: 0;
        background: linear-gradient(to right, #1f2937, transparent);
      }

      #marqueeContainer::after {
        right: 0;
        background: linear-gradient(to left, #1f2937, transparent);
      }

      /* Pause animation on hover */
      #marqueeContainer:hover #marqueeContent {
        animation-play-state: paused;
      }
</style>

<section class="bg-gray-50 py-8 sm:py-12">
  <div class="max-w-7xl mx-auto px-4 text-center">
    <h2 class="text-2xl font-bold text-gray-400 mb-6">Our Past Experiences</h2>
    <div id="marqueeContainer">
      <div id="marqueeContent">
        <!-- Single set of logos -->
        <a href="https://www.servicenow.com" target="_blank" rel="noopener" class="logo-link">
          <img 
            src="https://m3sservices.s3.us-east-1.amazonaws.com/servicenow.png" 
            alt="ServiceNow" 
            class="logo-img" loading="lazy">
        </a>
        <a href="https://www2.deloitte.com" target="_blank" rel="noopener" class="logo-link">
          <img 
            src="https://m3sservices.s3.us-east-1.amazonaws.com/deloitte.png" 
            alt="Deloitte" 
            class="logo-img" loading="lazy">
        </a>
        <a href="https://www.xneelo.com" target="_blank" rel="noopener" class="logo-link">
          <img 
            src="https://m3sservices.s3.us-east-1.amazonaws.com/xneelo.png" 
            alt="Xneelo" 
            class="logo-img" loading="lazy">
        </a>
        <a href="https://www.ebhorsmanandson.com" target="_blank" rel="noopener" class="logo-link">
          <img 
            src="https://m3sservices.s3.us-east-1.amazonaws.com/ebhorsman.png" 
            alt="E.B. Horsman &amp; Son" 
            class="logo-img" loading="lazy">
        </a>
        <a href="https://www.lbl.gov" target="_blank" rel="noopener" class="logo-link">
          <img 
            src="https://m3sservices.s3.us-east-1.amazonaws.com/berkeley.jpg" 
            alt="Berkley Labs" 
            class="logo-img" loading="lazy">
        </a>
        <a href="https://www.ornl.gov" target="_blank" rel="noopener" class="logo-link">
          <img 
            src="https://m3sservices.s3.us-east-1.amazonaws.com/ornl.png" 
            alt="Oak Ridge National Laboratory" 
            class="logo-img" loading="lazy">
        </a>
        <a href="https://www.cam.ac.uk" target="_blank" rel="noopener" class="logo-link">
          <img 
            src="https://m3sservices.s3.us-east-1.amazonaws.com/ucam.png" 
            alt="University of Cambridge" 
            class="logo-img" loading="lazy">
        </a>
        <a href="https://illinois.edu" target="_blank" rel="noopener" class="logo-link">
          <img 
            src="https://m3sservices.s3.us-east-1.amazonaws.com/uiuc.png" 
            alt="University of Illinois at Urbana-Champaign" 
            class="logo-img" loading="lazy">
        </a>
        <a href="https://www.ubc.ca" target="_blank" rel="noopener" class="logo-link">
          <img 
            src="https://m3sservices.s3.us-east-1.amazonaws.com/ubc.png" 
            alt="University of British Columbia" 
            class="logo-img" loading="lazy">
        </a>
        <a href="https://www.dtu.ac.in" target="_blank" rel="noopener" class="logo-link">
          <img 
            src="https://m3sservices.s3.us-east-1.amazonaws.com/dtu.png" 
            alt="Delhi Technical University" 
            class="logo-img" loading="lazy">
        </a>
        <a href="https://www.du.ac.in" target="_blank" rel="noopener" class="logo-link">
          <img 
            src="https://m3sservices.s3.us-east-1.amazonaws.com/du.png" 
            alt="Delhi University" 
            class="logo-img" loading="lazy">
        </a>
      </div>
    </div>
  </div>
</section>


<style>
/* Diamond shape behind each photo */
.diamond-wrapper {
  position: absolute;
  width: 120px;
  height: 120px;
  /* Create a diamond by rotating a square */
  transform: rotate(45deg);
  /* Use a brand gradient or solid color */
  background: linear-gradient(to right, #ff80b5, #9089fc);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  z-index: -1;
  border-radius: 8px; /* optional rounding for corners */
}

/* For the detail toggles: smooth open/close */
.details-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}
</style>

<div class="space-y-12 mt-8">
  <!-- 1) Gauransh Tandon -->
  <div class="md:flex md:items-center md:space-x-6 bg-gray-900 rounded-lg p-6 hover:shadow-xl transition-shadow relative">
    <!-- Photo & Diamond -->
    <div class="relative mb-4 md:mb-0 w-32 h-32 mx-auto md:mx-0">
      <div class="diamond-wrapper"></div>
      <img 
        src="https://m3sservices.s3.us-east-1.amazonaws.com/sunit.jpg"
        alt="Sunit Tandon"
        class="rounded-full w-32 h-32 object-cover"
      />
    </div>
    <!-- Text/Bio -->
    <div class="flex-1 text-center md:text-left">
      <h3 class="text-2xl font-bold text-white">Sunit Tandon</h3>
      <p class="text-md text-pink-400 font-semibold">Investments & Real Estate Executive</p>
      <p class="mt-2 text-gray-300">
        With 30+ years spanning education, hospitality, and real estate, Sunit manages global investments and strategic market analysis for M3S clients.
      </p>
      <!-- Read More Toggle -->
      <details class="mt-3 animate-details">
        <summary class="text-pink-400 cursor-pointer font-medium hover:underline">
          Read More
        </summary>
        <div class="details-content mt-2 text-gray-400 text-sm">
          <p>
            Sunit’s track record includes large-scale hospitality ventures, real estate investment firms, and education administration. His robust planning and stakeholder management expertise guide M3S in building resilient, diversified portfolios for long-term success. Sunit holds a Bachelor's and Master's in Economics from the Delhi University (DU) and a Master's in Business Administration (MBA) from the Institute of Management Technology, Ghaziabad.
          </p>
        </div>
      </details>
    </div>
  </div>

  <div class="md:flex md:items-center md:space-x-6 bg-gray-900 rounded-lg p-6 hover:shadow-xl transition-shadow relative">
    <!-- Photo & Diamond -->
    <div class="relative mb-4 md:mb-0 w-32 h-32 mx-auto md:mx-0">
      <div class="diamond-wrapper"></div>
      <img 
        src="https://m3sservices.s3.us-east-1.amazonaws.com/gauransh.jpg" 
        alt="Gauransh Tandon" 
        class="rounded-full w-32 h-32 object-cover"
      />
    </div>
    <!-- Text/Bio -->
    <div class="flex-1 text-center md:text-left">
      <h3 class="text-2xl font-bold text-white">Gauransh Tandon</h3>
      <p class="text-md text-pink-400 font-semibold">AI & ML Technology Executive</p>
      <p class="mt-2 text-gray-300">
        With 10+ years of experience software engineering and AI/ML, Gauransh guides our AI/ML innovations with deep expertise in cloud architecture and DevOps.
      </p>
      <!-- Read More Toggle -->
      <details class="mt-3 animate-details">
        <summary class="text-pink-400 cursor-pointer font-medium hover:underline">
          Read More
        </summary>
        <div class="details-content mt-2 text-gray-400 text-sm">
          <p>
            Gauransh was a founding member of ServiceNow's AI team and helped build them large-scale machine learning solutions in Python. He also had a research stint at the University of Cambridge. He actively mentors junior engineers and ensures real-world AI applications stay at the heart of M3S’s services. Gauransh holds a Bachelor's in Science majoring in Computer Science, Mathematics and Economics  from the University of Illinois at Urbana-Champaign (UIUC).
          </p>
        </div>
      </details>
    </div>
  </div>

  <!-- 2) Pranav Tandon -->
  <div class="md:flex md:items-center md:space-x-6 bg-gray-900 rounded-lg p-6 hover:shadow-xl transition-shadow relative">
    <!-- Photo & Diamond -->
    <div class="relative mb-4 md:mb-0 w-32 h-32 mx-auto md:mx-0">
      <div class="diamond-wrapper"></div>
      <img 
        src="https://m3sservices.s3.us-east-1.amazonaws.com/pranav.jpg"
        alt="Pranav Tandon"
        class="rounded-full w-32 h-32 object-cover"
      />
    </div>
    <!-- Text/Bio -->
    <div class="flex-1 text-center md:text-left">
      <h3 class="text-2xl font-bold text-white">Pranav Tandon</h3>
      <p class="text-md text-pink-400 font-semibold">Business Operations Executive</p>
      <p class="mt-2 text-gray-300">
        With 5+ years of experience in business operations and engineering, Pranav drives operational excellence and strategic growth for cross-functional collaboration that boosts productivity and drives transformative results.
      </p>
      <!-- Read More Toggle -->
      <details class="mt-3 animate-details">
        <summary class="text-pink-400 cursor-pointer font-medium hover:underline">
          Read More
        </summary>
        <div class="details-content mt-2 text-gray-400 text-sm">
          <p>
            Having led SaaS projects and contributed to data-driven solutions, Pranav ensures that M3S’s services align with client needs and market trends. With experience spanning AI drug discovery, SaaS development, and bioinformatics, Pranav brings a multidisciplinary approach to M3S. Pranav's expertise in data analytics and visualization ensures M3S delivers cutting-edge, data-driven solutions tailored to each client's unique needs. Pranav holds a Bachelor's of Applied Science in Biotechnology and Computer Science from the University of British Columbia (UBC).
          </p>
        </div>
      </details>
    </div>
  </div>  

  
<div class="md:flex md:items-center md:space-x-6 bg-gray-900 rounded-lg p-6 hover:shadow-xl transition-shadow relative">
  <!-- Photo & Diamond -->
  <div class="relative mb-4 md:mb-0 w-32 h-32 mx-auto md:mx-0">
    <div class="diamond-wrapper"></div>
    <!-- Replace with Navjot's photo -->
    <img 
      src="https://m3sservices.s3.us-east-1.amazonaws.com/navjot.png"
      alt="Navjot Singh"
      class="rounded-full w-32 h-32 object-cover"
    />
  </div>
  <!-- Text/Bio -->
  <div class="flex-1 text-center md:text-left">
    <h3 class="text-2xl font-bold text-white">Navjot Singh</h3>
    <p class="text-md text-pink-400 font-semibold">AI & ML Research Executive</p>
    <p class="mt-2 text-gray-300">
      With 7+ years of experience in research & development, Navjot guides research in machine learning and numerical analysis, specializing in developing parallel numerical algorithms for tensor decomposition and completion.
    </p>
    <!-- Read More Toggle -->
    <details class="mt-3 animate-details">
      <summary class="text-pink-400 cursor-pointer font-medium hover:underline">
        Read More
      </summary>
      <div class="details-content mt-2 text-gray-400 text-sm">
        <p>
          Navjot has extensive experience as a Researcher at UIUC/Berkeley Labs and Oak Ridge National Laboratory, focusing on scalable tensor completion algorithms. His research includes publications on tensor decomposition methods,  distributed-memory tensor completion and scalable tensor completion algorithms for link prediction in Knowledge Graphs. Navjot holds a PhD in Computer Science from UIUC and a Bachelor's in Mathematics and Computing from Delhi College of Engineering.
        </p>
      </div>
    </details>
  </div>
</div>

<div class="md:flex md:items-center md:space-x-6 bg-gray-900 rounded-lg p-6 hover:shadow-xl transition-shadow relative">
  <!-- Photo & Diamond -->
  <div class="relative mb-4 md:mb-0 w-32 h-32 mx-auto md:mx-0">
    <div class="diamond-wrapper"></div>
    <!-- Replace with Abhishek's photo -->
    <img 
      src="https://m3sservices.s3.us-east-1.amazonaws.com/abhishek.jpeg"
      alt="Abhishek Chowdhry"
      class="rounded-full w-32 h-32 object-cover"
    />
  </div>
  <!-- Text/Bio -->
  <div class="flex-1 text-center md:text-left">
    <h3 class="text-2xl font-bold text-white">Abhishek Chowdhry</h3>
    <p class="text-md text-pink-400 font-semibold">Tax & Assurance Executive</p>
    <p class="mt-2 text-gray-300">
      With 7+ years of experience in assurance practices, Abhishek is an accomplished Audit Senior at Deloitte - Offices of the US, here he guides tax and assurance for the financial services sector with deep expertise in financial regulations and compliance.
    </p>
    <!-- Read More Toggle -->
    <details class="mt-3 animate-details">
      <summary class="text-pink-400 cursor-pointer font-medium hover:underline">
        Read More
      </summary>
      <div class="details-content mt-2 text-gray-400 text-sm">
        <p>
          Abhishek’s tenure at Deloitte and S.R. Batliboi & Associates LLP has equipped him with extensive experience in audit and assurance for the financial services sector. Notably, he cleared the Chartered Accountant exams in his first attempt, showcasing his exceptional dedication and aptitude. His ability to foster meaningful discussions and his observant nature make him a valuable asset in professional settings. Abhishek holds a Bachelor's in Commerce from the Delhi University (DU).
        </p>
      </div>
    </details>
  </div>
</div>
</div>

---

<section class="bg-gray-900 py-12">
<h2 class="text-4xl font-bold text-white text-center mb-8">Ready to Work With the Best?</h2>
<div class="mt-12 text-center">
  <p class="text-lg text-gray-300 mb-6">
    Curious how our dedicated team can transform your next project or investment strategy?
  </p>
  <a
    href="https://cal.com/m3sservices/30min?month=2025-01&date=2025-01-27"
    target="_blank"
    rel="noopener"
    class="inline-block rounded-md bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-3 text-sm font-semibold text-white transition hover:from-purple-500 hover:to-pink-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2"
  >
    Book a Call
  </a>
</div>
</section>

<script>
// Animate <details> expansions
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.animate-details').forEach(details => {
    const content = details.querySelector('.details-content');
    if (details.hasAttribute('open')) {
      content.style.maxHeight = content.scrollHeight + 'px';
    }
    details.addEventListener('toggle', () => {
      if (details.open) {
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        content.style.maxHeight = 0;
      }
    });
  });
});
</script>
