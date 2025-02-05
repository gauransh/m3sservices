---
title: "Fyler: Automated SEC Filings"
date: 2024-04-30T12:00:00+00:00
draft: false
description: "How M3S Services helped Fyler.us automate SEC filings and save countless hours"
featured_image: "../assets/images/defaults/about_us.jpg"
---

<style>
/* General styling for the horizontal "section blocks" */
.about-section {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}
@media (min-width: 768px) {
  .about-section {
    grid-template-columns: 30% 1fr; /* Title on left ~30%, content ~70% */
  }
}

/* Title column styling */
.about-section-title {
  font-size: 1.25rem;
  font-weight: 700;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
  border-bottom: 2px solid rgba(255,255,255,0.3); /* subtle accent */
}

/* Variation backgrounds for color blocking */
.bg-section-pink {
  background: linear-gradient(to right, #ff80b5, #9089fc);
}
.bg-section-dark {
  background-color: #1f2937; /* e.g. Tailwind's gray-800 or #1f2937 */
}
.bg-section-slight {
  background-color: #111827; /* a slightly darker shade to differentiate */
}

/* Make sure text is readable on pink gradient sections */
.bg-section-pink .about-section-title,
.bg-section-pink p,
.bg-section-pink li,
.bg-section-pink strong,
.bg-section-pink em {
  color: #ffffff;
}

</style>

<div class="max-w-4xl mx-auto px-4">
  <div class="prose prose-invert mx-auto">
    <div class="flex justify-center mb-12">
      <a href="https://fyler.us" target="_blank" rel="noopener noreferrer">
        <div class="bg-gradient-to-r from-pink-500 to-purple-500 p-8 rounded-lg">
          <img 
            src="https://pub-63c6a647b6f740e885a4d0b9305248e3.r2.dev/defaults/fyler.png" 
            alt="Fyler.us Logo" 
            class="h-16 w-auto"
          />
        </div>
      </a>
    </div>
    <div class="bg-pink-600 bg-opacity-10 p-6 rounded-lg mb-8 text-center">
      <blockquote class="text-xl italic text-white">
        "M3S engineered an end-to-end SEC automation system that reduced our 8-K filing prep from 12 hours to 90 minutes. We've filed 23 error-free reports since implementation—including three last-minute material event disclosures that would've previously required all-nighters."
        <footer class="text-right mt-4">
          <cite class="text-gray-400">— Cory Skerl, CEO at Fyler.us</cite>
        </footer>
      </blockquote>
    </div>
    <h2 class="text-2xl font-bold text-white mb-4 text-center">The Challenge</h2>
    <p class="text-gray-300 text-center">
      When we first met the team at Fyler.us, they were struggling with the manual effort required for 8-K filings. These critical reports could take up to 12 hours to prepare, especially when dealing with last-minute material events. The process was not only time-consuming but also prone to formatting errors that could cause delays in submission.
    </p>
    <h2 class="text-2xl font-bold text-white mb-4 mt-8 text-center">Our Solution</h2>
    <ul class="list-disc list-inside text-gray-300 space-y-2">
      <li>Built and trained a custom AI pipeline using thousands of existing filings</li>
      <li>Implemented automated EDGAR compliance checks</li>
      <li>Developed a system to auto-generate draft disclosures</li>
      <li>Created an intuitive interface for quick reviews and edits</li>
    </ul>
    <div class="my-12 rounded-lg overflow-hidden bg-gray-800 p-6">
      <h3 class="text-xl font-bold text-white mb-4 text-center">See It in Action</h3>
      {{< s3-video 
        url="https://pub-63c6a647b6f740e885a4d0b9305248e3.r2.dev/defaults/fyler.mp4" 
        title="Fyler.us automation demo" 
      >}}
      <p class="text-gray-400 text-sm mt-2 text-center">
        Watch how Fyler.us transforms raw disclosure data into EDGAR-compliant filings in minutes
      </p>
    </div>
    <h2 class="text-2xl font-bold text-white mb-4 mt-8 text-center">The Results</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
      <div class="bg-gray-800 p-6 rounded-lg">
        <h3 class="text-xl font-bold text-white mb-2 text-center">90 Minutes</h3>
        <p class="text-gray-400 text-center">Average filing preparation time (down from 12 hours)</p>
      </div>
      <div class="bg-gray-800 p-6 rounded-lg">
        <h3 class="text-xl font-bold text-white mb-2 text-center">25+</h3>
        <p class="text-gray-400 text-center">Error-free reports filed since implementation</p>
      </div>
      <div class="bg-gray-800 p-6 rounded-lg">
        <h3 class="text-xl font-bold text-white mb-2 text-center">100%</h3>
        <p class="text-gray-400 text-center">EDGAR compliance rate on first submission</p>
      </div>
    </div>
    <div class="bg-gray-800 p-8 rounded-lg mt-12 text-center">
      <h2 class="text-2xl font-bold text-white mb-4 text-center">Ready to Transform Your Operations?</h2>
      <p class="text-gray-300 mb-6 text-center">
        Let's discuss how we can help automate your compliance processes and give your team back valuable time.
      </p>
      <a
        href="https://cal.com/m3sservices/30min"
        target="_blank"
        rel="noopener"
        class="inline-block rounded-md bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-3 text-sm font-semibold text-white transition hover:from-purple-500 hover:to-pink-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2"
      >
        Book a Call
      </a>
    </div>
  </div>
</div>