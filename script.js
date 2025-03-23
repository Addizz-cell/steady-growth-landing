
// Wait for DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Set current year in the copyright text
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

  // Feature cards data
  const features = [
    {
      icon: 'dollar-sign',
      title: "Forex Trading",
      description: "Our expert traders navigate the forex market to generate steady returns on your investment."
    },
    {
      icon: 'bar-chart-2',
      title: "Binary Trading",
      description: "Experience the excitement of binary options with expert guidance and strategies."
    },
    {
      icon: 'building',
      title: "Real Estate",
      description: "Diversify your portfolio with premium real estate investments managed by industry experts."
    },
    {
      icon: 'shield',
      title: "Secure Investments",
      description: "Your investments are protected with industry-leading security measures and risk management."
    }
  ];

  // Render feature cards
  const featuresGrid = document.getElementById('features-grid');
  features.forEach(feature => {
    const featureCard = document.createElement('div');
    featureCard.className = 'card';
    featureCard.innerHTML = `
      <div class="mb-4">
        <svg class="h-12 w-12 text-e73667" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          ${getIconPath(feature.icon)}
        </svg>
      </div>
      <h3 class="card-title">${feature.title}</h3>
      <p class="card-content">${feature.description}</p>
    `;
    featuresGrid.appendChild(featureCard);
  });

  // Testimonial data
  const testimonials = [
    {
      quote: "I never thought investing could be this simple. Steady Growth Insight has helped me grow my savings without any prior experience.",
      name: "Michael Johnson",
      title: "School Teacher"
    },
    {
      quote: "The returns on my real estate portfolio have exceeded my expectations. Their team of experts truly know what they're doing.",
      name: "Sarah Williams",
      title: "Healthcare Professional"
    },
    {
      quote: "As someone new to investing, I appreciate how transparent and supportive the Steady Growth team has been throughout my journey.",
      name: "David Chen",
      title: "IT Specialist"
    }
  ];

  // Render testimonial cards
  const testimonialsGrid = document.getElementById('testimonials-grid');
  testimonials.forEach(testimonial => {
    const testimonialCard = document.createElement('div');
    testimonialCard.className = 'card';
    testimonialCard.innerHTML = `
      <blockquote class="text-white-90 italic mb-6">
        "${testimonial.quote}"
      </blockquote>
      <div class="flex items-center">
        <div class="bg-e73667 rounded-full p-2 mr-3">
          <svg class="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        <div>
          <p class="font-medium">${testimonial.name}</p>
          <p class="text-sm text-white-70">${testimonial.title}</p>
        </div>
      </div>
    `;
    testimonialsGrid.appendChild(testimonialCard);
  });

  // Tab functionality for market prices
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabPanes = document.querySelectorAll('.tab-pane');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const tabId = button.getAttribute('data-tab');
      
      // Remove active class from all buttons and panes
      tabButtons.forEach(btn => btn.classList.remove('active', 'bg-e73667', 'text-white'));
      tabPanes.forEach(pane => pane.classList.add('hidden'));
      
      // Add active class to current button and pane
      button.classList.add('active', 'bg-e73667', 'text-white');
      document.getElementById(`${tabId}-tab`).classList.remove('hidden');
    });
  });

  // Helper function to get SVG path for icons
  function getIconPath(iconName) {
    const iconPaths = {
      'dollar-sign': '<line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>',
      'bar-chart-2': '<line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line>',
      'building': '<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="9" y1="22" x2="9" y2="2"></line><line x1="15" y1="22" x2="15" y2="2"></line>',
      'shield': '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>'
    };
    return iconPaths[iconName] || '';
  }
});
