
// Wait for DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Update copyright year
  const currentYear = new Date().getFullYear();
  document.getElementById('copyright').textContent = `© ${currentYear} Steady Growth Insight. All rights reserved.`;
  
  // Mobile menu toggle
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');

  mobileMenuButton.addEventListener('click', function() {
    mobileMenu.classList.toggle('hidden');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
  });

  // Close mobile menu when clicking on a link
  const mobileMenuLinks = mobileMenu.querySelectorAll('a');
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobileMenu.classList.add('hidden');
      menuIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    });
  });

  // Testimonial data
  const testimonials = [
    {
      quote: "I never thought investing could be this simple. Steady Growth Insight has helped me grow my savings without any prior experience. Their forex and binary trading strategies have been incredibly effective.",
      name: "Michael Johnson",
      title: "School Teacher",
      location: "New York, USA",
      rating: 5
    },
    {
      quote: "The returns on my real estate portfolio and binary trading investments have exceeded my expectations. Their team of experts truly know what they're doing.",
      name: "Sarah Williams",
      title: "Healthcare Professional",
      location: "London, UK",
      rating: 5
    },
    {
      quote: "As someone new to forex and binary trading, I appreciate how transparent and supportive the Steady Growth team has been throughout my journey.",
      name: "David Chen",
      title: "IT Specialist",
      location: "Toronto, Canada",
      rating: 5
    },
    {
      quote: "I started with the Advanced Plan and have been amazed at the consistency of returns. The 20% every 4 days has completely changed my financial outlook.",
      name: "Jessica Rodriguez",
      title: "Business Owner",
      location: "Miami, USA",
      rating: 5
    },
    {
      quote: "After trying several investment platforms, Steady Growth stands out for their personal service and exceptional returns on forex trades.",
      name: "Robert Kim",
      title: "Financial Analyst",
      location: "Seoul, South Korea",
      rating: 5
    },
    {
      quote: "The VIP plan has exceeded all my expectations. The bi-weekly returns have been consistent, and their binary trading insights are unmatched.",
      name: "Emma Thompson",
      title: "Marketing Executive",
      location: "Sydney, Australia",
      rating: 5
    },
    {
      quote: "I was hesitant about investing online, but Steady Growth's transparency and consistent returns have made me a believer in their system.",
      name: "Mohammed Al-Farsi",
      title: "Engineer",
      location: "Dubai, UAE",
      rating: 5
    },
    {
      quote: "The real estate and forex trading opportunities provided by Steady Growth have diversified my portfolio in ways I never thought possible.",
      name: "Sophia Müller",
      title: "Retired Educator",
      location: "Berlin, Germany",
      rating: 5
    }
  ];

  // Render testimonials
  const testimonialsGrid = document.getElementById('testimonials-grid');
  testimonials.forEach(testimonial => {
    const testimonialCard = document.createElement('div');
    testimonialCard.className = 'card';
    
    // Create rating stars
    let starsHtml = '';
    for (let i = 0; i < 5; i++) {
      starsHtml += `<svg class="h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-400'}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>`;
    }
    
    testimonialCard.innerHTML = `
      <div class="flex justify-between items-center mb-4">
        <div class="flex items-center">
          <div class="bg-e73667 rounded-full p-2 mr-3">
            <svg class="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div>
            <p class="font-medium">${testimonial.name}</p>
            <p class="text-sm text-white-70">${testimonial.title}, ${testimonial.location}</p>
          </div>
        </div>
        <div class="flex">
          ${starsHtml}
        </div>
      </div>
      <div class="relative pl-6">
        <svg class="absolute top-0 left-0 h-5 w-5 text-e73667 rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
          <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
        </svg>
        <blockquote class="text-white-90 italic">
          "${testimonial.quote}"
        </blockquote>
      </div>
    `;
    
    testimonialsGrid.appendChild(testimonialCard);
  });
});
