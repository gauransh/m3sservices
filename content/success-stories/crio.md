---
title: "Crio.do: AI Education Innovation"
date: 2024-04-30T12:00:00+00:00
draft: false
description: "How M3S Services helped Crio.do revolutionize AI education and implement advanced plagiarism detection"
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
      <a href="https://crio.do" target="_blank" rel="noopener noreferrer">
        <div class="bg-gradient-to-r from-pink-500 to-purple-500 p-8 rounded-lg">
          <img 
            src="https://pub-63c6a647b6f740e885a4d0b9305248e3.r2.dev/defaults/crio_do.png" 
            alt="Crio.do Logo" 
            class="h-16 w-auto"
          />
        </div>
      </a>
    </div>
    <div class="bg-pink-600 bg-opacity-10 p-6 rounded-lg mb-8 text-center">
      <blockquote class="text-xl italic text-white">
        "M3S transformed how we teach AI development. Their team co-built our 'AI Tools for Developers' curriculum featuring 47 hands-on labs. The plagiarism detection system they implemented using AST analysis reduced cheating incidents by 63% across 800+ student projects."
        <footer class="text-right mt-4">
          <cite class="text-gray-400">— Kiran Suresh, Head of Product at Crio.do</cite>
        </footer>
      </blockquote>
    </div>
    <h2 class="text-2xl font-bold text-white mb-4 text-center">The Challenge</h2>
    <p class="text-gray-300 text-center">
      Crio.do faced two critical challenges: creating an engaging AI curriculum that met industry demands and maintaining academic integrity through effective plagiarism detection in coding assignments. They needed a solution that would both enhance learning outcomes and ensure the authenticity of student work.
    </p>
    <h2 class="text-2xl font-bold text-white mb-4 mt-8 text-center">Our Solution</h2>
    <ul class="list-disc list-inside text-gray-300 space-y-2">
      <li>Developed 47 hands-on labs integrating real-world AI tools</li>
      <li>Implemented AST-based plagiarism detection system</li>
      <li>Created practical projects using Cohere and LlamaIndex</li>
      <li>Built comprehensive learning analytics dashboard</li>
    </ul>
    <div class="my-12 rounded-lg overflow-hidden bg-gray-800 p-6">
      <h3 class="text-xl font-bold text-white mb-4 text-center">See It in Action</h3>
      {{< s3-video 
        url="https://pub-63c6a647b6f740e885a4d0b9305248e3.r2.dev/defaults/crio.mp4" 
        title="Crio.do AI learning platform demo" 
      >}}
      <p class="text-gray-400 text-sm mt-2 text-center">
        Watch how students learn AI development through hands-on projects on Crio.do
      </p>
    </div>
    <h2 class="text-2xl font-bold text-white mb-4 mt-8 text-center">The Results</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
      <div class="bg-gray-800 p-6 rounded-lg">
        <h3 class="text-xl font-bold text-white mb-2 text-center">63%</h3>
        <p class="text-gray-400 text-center">Reduction in plagiarism incidents</p>
      </div>
      <div class="bg-gray-800 p-6 rounded-lg">
        <h3 class="text-xl font-bold text-white mb-2 text-center">800+</h3>
        <p class="text-gray-400 text-center">Student projects validated</p>
      </div>
      <div class="bg-gray-800 p-6 rounded-lg">
        <h3 class="text-xl font-bold text-white mb-2 text-center">47</h3>
        <p class="text-gray-400 text-center">Interactive AI labs developed</p>
      </div>
    </div>
    <div class="bg-gray-800 p-8 rounded-lg mt-12 text-center">
      <h2 class="text-2xl font-bold text-white mb-4 text-center">Ready to Transform Your Operations?</h2>
      <p class="text-gray-300 mb-6 text-center">
        Let's discuss how we can help enhance your educational platform with AI-powered solutions.
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
  </div>
</div>
