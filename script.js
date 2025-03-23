
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

  // Market prices section
  const marketPrices = document.getElementById('market-prices');
  marketPrices.innerHTML = `
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-3xl md-text-4xl font-bold mb-6">Real-Time Market Insights</h2>
        <p class="text-lg text-white-80 max-w-2xl mx-auto">
          Stay updated with the latest market trends to make informed investment decisions.
        </p>
      </div>
      
      <div class="grid grid-cols-1 md-grid-cols-3 gap-6">
        <div class="card">
          <h3 class="card-title flex items-center">
            <svg class="h-5 w-5 mr-2 text-e73667" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="12" y1="1" x2="12" y2="23"></line>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
            Forex
          </h3>
          <div class="space-y-4 mt-4">
            <div class="flex justify-between items-center">
              <span>EUR/USD</span>
              <span class="text-green-500">1.0921 <span class="text-xs">+0.05%</span></span>
            </div>
            <div class="flex justify-between items-center">
              <span>GBP/USD</span>
              <span class="text-red-500">1.2689 <span class="text-xs">-0.12%</span></span>
            </div>
            <div class="flex justify-between items-center">
              <span>USD/JPY</span>
              <span class="text-green-500">149.62 <span class="text-xs">+0.23%</span></span>
            </div>
          </div>
        </div>
        
        <div class="card">
          <h3 class="card-title flex items-center">
            <svg class="h-5 w-5 mr-2 text-e73667" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
            Commodities
          </h3>
          <div class="space-y-4 mt-4">
            <div class="flex justify-between items-center">
              <span>Gold</span>
              <span class="text-green-500">$2,317.30 <span class="text-xs">+0.45%</span></span>
            </div>
            <div class="flex justify-between items-center">
              <span>Silver</span>
              <span class="text-green-500">$27.15 <span class="text-xs">+0.89%</span></span>
            </div>
            <div class="flex justify-between items-center">
              <span>Crude Oil</span>
              <span class="text-red-500">$82.69 <span class="text-xs">-0.31%</span></span>
            </div>
          </div>
        </div>
        
        <div class="card">
          <h3 class="card-title flex items-center">
            <svg class="h-5 w-5 mr-2 text-e73667" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            Crypto
          </h3>
          <div class="space-y-4 mt-4">
            <div class="flex justify-between items-center">
              <span>Bitcoin</span>
              <span class="text-red-500">$63,281 <span class="text-xs">-1.25%</span></span>
            </div>
            <div class="flex justify-between items-center">
              <span>Ethereum</span>
              <span class="text-red-500">$3,084 <span class="text-xs">-2.13%</span></span>
            </div>
            <div class="flex justify-between items-center">
              <span>Solana</span>
              <span class="text-green-500">$149.12 <span class="text-xs">+3.46%</span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

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
