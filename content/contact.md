---
title: "Contact Us"
date: 2023-12-18T18:20:23+07:00
draft: false
description: "Contact M3S Services to receive top-tier consultancy across multiple domains"
featured_image: ../assets/images/defaults/about_us.jpg
---

<div class="bg-gray-800 py-12 px-6 rounded-lg shadow-lg">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Address Information Section -->
        <div>
            <h1 class="text-xl font-bold text-white mb-4">Our Locations</h1>
            <!-- Detailed addresses for each location -->
            <div class="space-y-4">
                <div>
                    <h3 class="text-lg text-white">Canada (British Columbia)</h3>
                    <p class="text-gray-400">126-7295 Moffatt Road, Richmond, BC V6Y 3E5</p>
                </div>
                <div>
                    <h3 class="text-lg text-white">United States (Maryland)</h3>
                    <p class="text-gray-400">3707 Bethnal Way, Silver Spring, MD 20906</p>
                </div>
                <div>
                    <h3 class="text-lg text-white">United States (Washington)</h3>
                    <p class="text-gray-400">500 Grover Road, Lynden, WA 98264</p>
                </div>
            </div>
        </div>

<form action="https://script.google.com/macros/s/AKfycbxNkq6BUAkVvpcIlBWAZHaViaBSi5gLi1XSin2ZkSFUPcsN3IXG1ICdBNkO9R-rrSfK/exec" method="POST" onsubmit="submitForm();return false;" class="bg-gray-800 py-12 px-6 rounded-lg shadow-lg grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-6">
  <div>
    <label for="first-name" class="block text-sm font-semibold text-white">First name</label>
    <input type="text" name="first_name" id="first-name" class="mt-2 block w-full rounded-md bg-gray-700 px-4 py-2 text-white">
  </div>
  <div>
    <label for="last-name" class="block text-sm font-semibold text-white">Last name</label>
    <input type="text" name="last_name" id="last-name" class="mt-2 block w-full rounded-md bg-gray-700 px-4 py-2 text-white">
  </div>
  <div class="sm:col-span-2">
    <label for="email" class="block text-sm font-semibold text-white">Email</label>
    <input type="email" name="email" id="email" class="mt-2 block w-full rounded-md bg-gray-700 px-4 py-2 text-white">
  </div>
  <div class="sm:col-span-2">
    <label for="phone-number" class="block text-sm font-semibold text-white">Phone number</label>
    <input type="tel" name="phone_number" id="phone-number" class="mt-2 block w-full rounded-md bg-gray-700 px-4 py-2 text-white">
  </div>
  <div class="sm:col-span-2">
    <label for="message" class="block text-sm font-semibold text-white">Message</label>
    <textarea name="message" id="message" rows="4" class="mt-2 block w-full rounded-md bg-gray-700 px-4 py-2 text-white"></textarea>
  </div>
  <div class="sm:col-span-2 flex justify-end">
    <button type="submit" class="mt-4 rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Send message</button>
  </div>
</form>

<script>
function submitForm() {
  var form = document.querySelector('form');
  fetch(form.action, {
    method: 'POST',
    body: new FormData(form),
    mode: 'no-cors' // Prevents CORS errors as we're not interested in the response
  }).then(function() {
    // Redirect to the contact page with a query parameter to show a confirmation message
    window.location = "/contact?submitted=true";
  }).catch(function(error) {
    console.error('Error submitting form:', error);
  });
  return false; // Prevent traditional form submission
}
</script>


<script>
window.onload = function() {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('submitted') === 'true') {
    document.getElementById('confirmation-message').style.display = 'block';
  }
}
</script>
<div id="confirmation-message" style="display: none;">Thank you for contacting us!\n We will get back to you soon.</div>

</div>
