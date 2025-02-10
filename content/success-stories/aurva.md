---
title: "Aurva: AI-Powered PII Detection"
date: 2024-04-30T12:00:00+00:00
draft: false
description: "How M3S Services helped Aurva.io enhance their PII detection system and build a world-class AI team"
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
  background-color: #1f2937;
}
.bg-section-slight {
  background-color: #111827;
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
      <a href="https://aurva.io" target="_blank" rel="noopener noreferrer">
        <div class="bg-gradient-to-r from-pink-500 to-purple-500 p-8 rounded-lg">
          <img 
            src="https://m3sservices.s3.us-east-1.amazonaws.com/aurva.png" 
            alt="Aurva.io Logo" 
            class="h-16 w-auto"
          />
        </div>
      </a>
    </div>
    <div class="bg-pink-600 bg-opacity-10 p-6 rounded-lg mb-8 text-center">
      <blockquote class="text-xl italic text-white">
        "During our Series A crunch, M3S single-handedly built our AI engineering team while simultaneously upgrading our PII detection system. Their hybrid BERT-CRF model achieved 98.7% recall on sensitive data identification—a 22% improvement over our legacy system."
        <footer class="text-right mt-4">
          <cite class="text-gray-400">— Apurv Garg, CEO at Aurva.io</cite>
        </footer>
      </blockquote>
    </div>
    <h2 class="text-2xl font-bold text-white mb-4 text-center">The Challenge</h2>
    <p class="text-gray-300 text-center">
      When Aurva.io approached us, they were struggling with high false-positive rates in their PII detection tool, leading to alert fatigue and client churn. They needed both a technical overhaul and the right team to maintain and improve their AI systems long-term.
    </p>
    <h2 class="text-2xl font-bold text-white mb-4 mt-8 text-center">Our Solution</h2>
    <ul class="list-disc list-inside text-gray-300 space-y-2">
      <li>Developed a hybrid BERT-CRF model for contextual PII detection</li>
      <li>Recruited and trained a specialized AI engineering team</li>
      <li>Implemented automated testing and validation pipelines</li>
      <li>Created comprehensive documentation and training materials</li>
    </ul>
    <div class="my-12 rounded-lg overflow-hidden bg-gray-800 p-6">
      <h3 class="text-xl font-bold text-white mb-4 text-center">See It in Action</h3>
      {{< s3-video 
        url="https://m3sservices.s3.us-east-1.amazonaws.com/aurva.mp4" 
        title="Aurva.io PII detection demo" 
      >}}
      <p class="text-gray-400 text-sm mt-2 text-center">
        Watch how Aurva.io's AI system identifies and protects sensitive information in real-time
      </p>
    </div>
    <h2 class="text-2xl font-bold text-white mb-4 mt-8 text-center">The Results</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
      <div class="bg-gray-800 p-6 rounded-lg">
        <h3 class="text-xl font-bold text-white mb-2 text-center">98.7%</h3>
        <p class="text-gray-400 text-center">Recall rate on sensitive data identification</p>
      </div>
      <div class="bg-gray-800 p-6 rounded-lg">
        <h3 class="text-xl font-bold text-white mb-2 text-center">14 Months</h3>
        <p class="text-gray-400 text-center">Zero security incidents since implementation</p>
      </div>
      <div class="bg-gray-800 p-6 rounded-lg">
        <h3 class="text-xl font-bold text-white mb-2 text-center">18%</h3>
        <p class="text-gray-400 text-center">Increase in client retention</p>
      </div>
    </div>
    <div class="bg-gray-800 p-8 rounded-lg mt-12 text-center">
      <h2 class="text-2xl font-bold text-white mb-4 text-center">Ready to Transform Your Operations?</h2>
      <p class="text-gray-300 mb-6 text-center">
        Let's discuss how we can help enhance your AI capabilities and build your dream team.
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
