---
title: "Success Stories"
date: 2024-04-30T12:00:00+00:00
draft: false
description: "Explore how M3S Services has helped companies across industries leverage technology for transformative results"
featured_image: "../assets/images/defaults/about_us.jpg"
---

<style>
/* Page background: subtle gradient */
.page-gradient {
  background: linear-gradient(135deg, #1c1c1c 0%, #111111 100%);
  min-height: 100vh;
  padding: 2rem 0;
}

/* Container spacing */
.page-container {
  max-width: 72rem; /* 72rem ~ 1152px */
  margin: 0 auto;
  padding: 0 1rem;
}

/* Card styling */
.case-study-card {
  position: relative;
  background-size: cover;
  background-position: center;
  border-radius: 0.5rem;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
}

/* Glassmorphism overlay */
.case-study-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(17, 24, 39, 0.75); /* Equivalent to bg-gray-900 with opacity */
  backdrop-filter: blur(5px);
  transition: background 0.3s ease-in-out;
  z-index: 1;
}

/* Hover effect: lift + reduce overlay opacity */
.case-study-card:hover {
  transform: translateY(-4px);
}
.case-study-card:hover::before {
  background: rgba(17, 24, 39, 0.55);
}

/* Card content on top of overlay */
.case-study-card > div {
  position: relative;
  z-index: 2;
  padding: 2rem;
}

/* Glow shadow on hover */
.case-study-card:hover {
  box-shadow: 0 0 20px rgba(236, 72, 153, 0.2); /* Slight pink glow */
}

/* Industry section styling */
.industry-section {
  margin-bottom: 2rem;
}

.industry-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Heading and text styles */
.page-header {
  text-align: center;
  margin-bottom: 3rem;
}
.page-header h1 {
  font-size: 2.5rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: 1rem;
}
.page-header p {
  font-size: 1.125rem;
  color: #a0a0a0;
}

/* CTA section */
.cta-section {
  text-align: center;
  margin-top: 4rem;
}
.cta-section h2 {
  font-size: 1.75rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 1rem;
}
.cta-section p {
  color: #ccc;
  margin-bottom: 2rem;
  max-width: 40rem;
  margin-left: auto;
  margin-right: auto;
}
.cta-button {
  display: inline-block;
  background: linear-gradient(to right, #ec4899, #a855f7);
  color: #fff;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  transition: background 0.3s ease;
  text-decoration: none;
}
.cta-button:hover {
  background: linear-gradient(to right, #a855f7, #ec4899);
}

/* Responsive grid for large screens */
@media (min-width: 1024px) {
  .single-column-grid {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}

/* Add company logo styling */
.company-logo {
  height: 70px;  /* Fixed height */
  width: auto;   /* Maintain aspect ratio */
  object-fit: contain;  /* Ensure logo fits within dimensions */
}
</style>

<div class="page-gradient">
  <div class="page-container">
    <!-- Page Header -->
    <div class="page-header">
      <p>
        Discover how we help organizations harness cutting-edge technology to transform their operations.
      </p>
    </div>
    <!-- Legal x Tech -->
    <div class="industry-section">
      <h2 class="industry-title">Legal x Tech</h2>
      <div class="grid grid-cols-1 single-column-grid gap-4">
        <a 
          href="/success-stories/fyler"
          class="case-study-card"
          style="background-image: url('https://pub-63c6a647b6f740e885a4d0b9305248e3.r2.dev/defaults/legal.png');"
        >
          <div>
            <div class="flex items-center justify-between mb-4">
              <img src="https://pub-63c6a647b6f740e885a4d0b9305248e3.r2.dev/defaults/fyler.png" alt="Fyler Logo" class="company-logo">
              <span class="text-pink-500 text-2xl">→</span>
            </div>
            <p class="text-gray-300">
              Automated SEC filings reduced preparation from 12 hours to just 90 minutes—delivering error-free, on-time reports and saving thousands in legal costs.
            </p>
          </div>
        </a>
      </div>
    </div>
    <!-- Security x Tech -->
    <div class="industry-section">
      <h2 class="industry-title">Security x Tech</h2>
      <div class="grid grid-cols-1 single-column-grid gap-4">
        <a
          href="/success-stories/aurva"
          class="case-study-card"
          style="background-image: url('https://pub-63c6a647b6f740e885a4d0b9305248e3.r2.dev/defaults/security.png');"
        >
          <div>
            <div class="flex items-center justify-between mb-4">
              <img src="https://pub-63c6a647b6f740e885a4d0b9305248e3.r2.dev/defaults/aurva.png" alt="Aurva Logo" class="company-logo">
              <span class="text-pink-500 text-2xl">→</span>
            </div>
            <p class="text-gray-300">
              AI-powered PII detection that achieved a 98.7% recall rate, boosting client trust and reducing security incidents to zero for 14 consecutive months.
            </p>
          </div>
        </a>
      </div>
    </div>
    <!-- Education x Tech -->
    <div class="industry-section">
      <h2 class="industry-title">Education x Tech</h2>
      <div class="grid grid-cols-1 single-column-grid gap-4">
        <a
          href="/success-stories/crio"
          class="case-study-card"
          style="background-image: url('https://pub-63c6a647b6f740e885a4d0b9305248e3.r2.dev/defaults/education.png');"
        >
          <div>
            <div class="flex items-center justify-between mb-4">
              <img src="https://pub-63c6a647b6f740e885a4d0b9305248e3.r2.dev/defaults/crio_do.png" alt="Crio Logo" class="company-logo">
              <span class="text-pink-500 text-2xl">→</span>
            </div>
            <p class="text-gray-300">
              Revolutionized AI education with interactive labs and advanced plagiarism detection—reducing cheating by 63% and driving higher course completion rates.
            </p>
          </div>
        </a>
      </div>
    </div>
    <!-- Real Estate x Tech -->
    <div class="industry-section">
      <h2 class="industry-title">Real Estate x Tech</h2>
      <div class="grid grid-cols-1 single-column-grid gap-4">
        <div
          class="case-study-card"
          style="background-image: url('https://pub-63c6a647b6f740e885a4d0b9305248e3.r2.dev/defaults/real_estate.png');"
        >
          <div>
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-xl font-bold text-gray-500">Coming Soon</h3>
            </div>
            <p class="text-gray-400">
              Stay tuned for our latest innovations in property analytics and sales optimization—launching soon!
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- Environment x Tech -->
    <div class="industry-section">
      <h2 class="industry-title">Environment x Tech</h2>
      <div class="grid grid-cols-1 single-column-grid gap-4">
        <div
          class="case-study-card"
          style="background-image: url('https://pub-63c6a647b6f740e885a4d0b9305248e3.r2.dev/defaults/environment.png');"
        >
          <div>
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-xl font-bold text-gray-500">Coming Soon</h3>
            </div>
            <p class="text-gray-400">
              We're exploring new ways to apply technology for sustainability and green innovations—update coming soon!
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- Logistics x Tech -->
    <div class="industry-section">
      <h2 class="industry-title">Logistics x Tech</h2>
      <div class="grid grid-cols-1 single-column-grid gap-4">
        <div
          class="case-study-card"
          style="background-image: url('https://pub-63c6a647b6f740e885a4d0b9305248e3.r2.dev/defaults/logistics.png');"
        >
          <div>
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-xl font-bold text-gray-500">Coming Soon</h3>
            </div>
            <p class="text-gray-400">
              We're exploring new ways to apply technology for logistics, shipping, and supply chain optimization innovations—update coming soon!
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- CTA Section -->
    <div class="cta-section">
      <h2>Ready to Transform Your Operations?</h2>
      <p>
        Let's discuss how our experts can partner with you to achieve your business goals and drive growth through innovative tech solutions.
      </p>
      <a
        href="https://cal.com/m3sservices/30min"
        target="_blank"
        rel="noopener"
        class="cta-button"
      >
        Book a Call
      </a>
    </div>

  </div>
</div>
