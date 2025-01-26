---
title: "Contact Us"
date: 2023-12-18T18:20:23+07:00
draft: false
description: "Contact M3S Services to receive top-tier consultancy across multiple domains"
featured_image: ../assets/images/defaults/about_us.jpg
---

<div class="bg-gray-800 rounded-lg shadow-lg py-12 px-6">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    <!-- Address Information Section -->
    <div>
      <h1 class="text-2xl font-bold text-white mb-6">Our Locations</h1>
      <div class="space-y-5">
        <div>
          <h3 class="text-lg text-white font-semibold">Canada (British Columbia)</h3>
          <p class="text-gray-400">126-7295 Moffatt Road, Richmond, BC V6Y 3E5</p>
        </div>
        <div>
          <h3 class="text-lg text-white font-semibold">United States (Maryland)</h3>
          <p class="text-gray-400">3707 Bethnal Way, Silver Spring, MD 20906</p>
        </div>
        <div>
          <h3 class="text-lg text-white font-semibold">United States (Washington)</h3>
          <p class="text-gray-400">500 Grover Road, Lynden, WA 98264</p>
        </div>
      </div>
    </div>
    <!-- Contact Form -->
    <form
      action="https://script.google.com/macros/s/AKfycbxNkq6BUAkVvpcIlBWAZHaViaBSi5gLi1XSin2ZkSFUPcsN3IXG1ICdBNkO9R-rrSfK/exec"
      method="POST"
      onsubmit="submitForm(); return false;"
      class="bg-gray-800 py-12 px-6 rounded-lg shadow-lg grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-6"
    >
      <!-- Honeypot field for spam prevention -->
      <input 
        type="text" 
        name="website" 
        class="hidden" 
        tabindex="-1" 
        autocomplete="off"
      />
      <div>
        <label for="first-name" class="block text-sm font-semibold text-white">First name</label>
        <input
          type="text"
          name="first_name"
          id="first-name"
          class="mt-2 block w-full rounded-md bg-gray-700 px-4 py-2 text-white"
        />
      </div>
      <div>
        <label for="last-name" class="block text-sm font-semibold text-white">Last name</label>
        <input
          type="text"
          name="last_name"
          id="last-name"
          class="mt-2 block w-full rounded-md bg-gray-700 px-4 py-2 text-white"
        />
      </div>
      <div class="sm:col-span-2">
        <label for="email" class="block text-sm font-semibold text-white">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          class="mt-2 block w-full rounded-md bg-gray-700 px-4 py-2 text-white"
        />
      </div>
      <div class="sm:col-span-2">
        <label for="phone-number" class="block text-sm font-semibold text-white">Phone number</label>
        <input
          type="tel"
          name="phone_number"
          id="phone-number"
          class="mt-2 block w-full rounded-md bg-gray-700 px-4 py-2 text-white"
        />
      </div>
      <div class="sm:col-span-2">
        <label for="message" class="block text-sm font-semibold text-white">Message</label>
        <textarea
          name="message"
          id="message"
          rows="4"
          class="mt-2 block w-full rounded-md bg-gray-700 px-4 py-2 text-white"
        ></textarea>
      </div>
      <div class="sm:col-span-2 flex justify-end">
        <!-- Matching CTA button style from About page -->
        <button
          type="submit"
          class="mt-4 inline-block rounded-md bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-3 text-sm font-semibold text-white transition hover:from-purple-500 hover:to-pink-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2"
        >
          Send message
        </button>
      </div>
    </form>
  </div>
  <!-- Scheduling a Call with the same button style -->
  <div class="mt-8 text-center text-xxl ">
    <p class="text-gray-300 mb-3">
      Prefer a direct conversation? Schedule a 30-minute call with us:
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
<script>
function submitForm() {
  const form = document.querySelector('form');
  // Simple spam check: if our honeypot (website) has any value, skip submission
  if (form.website && form.website.value.trim() !== '') {
    console.log('Spam detected. Aborting form submission.');
    return false;
  }
  // Submit form data
  fetch(form.action, {
    method: 'POST',
    body: new FormData(form),
    mode: 'no-cors'
  })
    .then(function() {
      // Redirect to 'thank-you' page upon success
      window.location = '/contact/thank-you';
    })
    .catch(function(error) {
      console.error('Error submitting form:', error);
    });
  return false;
}
</script>
