
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

  // Investment plans data
  const plans = [
    {
      name: "Starter Plan",
      icon: 'shield',
      minAmount: 300,
      maxAmount: 1000,
      returnRate: "40% Monthly",
      returnPeriod: "Monthly",
      features: [
        "Access to basic investment tools",
        "Email support",
        "Monthly market insights",
        "Forex & Binary trading options",
      ],
      recommended: false,
      color: "bg-gradient-to-br from-00395b to-002439"
    },
    {
      name: "Standard Plan",
      icon: 'star',
      minAmount: 1100,
      maxAmount: 5000,
      returnRate: "25% Weekly",
      returnPeriod: "Weekly",
      features: [
        "All Starter Plan features",
        "Priority email support",
        "Weekly market insights",
        "Access to real estate investments",
        "Enhanced forex & binary trading options"
      ],
      recommended: false,
      color: "bg-gradient-to-br from-00395b to-002439"
    },
    {
      name: "Advanced Plan",
      icon: 'diamond',
      minAmount: 5100,
      maxAmount: 10000,
      returnRate: "20% Every 4 Days",
      returnPeriod: "Every 4 Days",
      features: [
        "All Standard Plan features",
        "Phone and email support",
        "Bi-weekly expert consultation",
        "Premium real estate opportunities",
        "Advanced forex & binary trading strategies",
        "Personalized investment dashboard"
      ],
      recommended: true,
      color: "bg-gradient-to-br from-002c3e to-e7366730"
    },
    {
      name: "VIP Plan",
      icon: 'crown',
      minAmount: 10100,
      maxAmount: 1000000,
      returnRate: "15% Every 2 Days",
      returnPeriod: "Every 2 Days",
      features: [
        "All Advanced Plan features",
        "24/7 dedicated support",
        "Daily market insights",
        "Exclusive investment opportunities",
        "Elite forex & binary trading platforms",
        "Personal investment manager",
        "Priority profit processing"
      ],
      recommended: false,
      color: "bg-gradient-to-br from-00395b to-002439"
    }
  ];

  // Render investment plans
  const investmentPlansContainer = document.getElementById('investment-plans');
  plans.forEach(plan => {
    const planCard = document.createElement('div');
    planCard.className = `card ${plan.color} relative overflow-hidden transition-transform hover-scale-105`;
    
    // Add recommended badge if applicable
    if (plan.recommended) {
      planCard.innerHTML += `
        <div class="absolute top-0 right-0 bg-e73667 text-white text-xs font-semibold px-3 py-1 rounded-bl-lg flex items-center">
          <svg class="mr-1 h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
          RECOMMENDED
        </div>
      `;
    }

    // Card content
    planCard.innerHTML += `
      <div class="mb-3">
        <svg class="h-10 w-10 text-e73667" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          ${getIconPath(plan.icon)}
        </svg>
      </div>
      <h3 class="text-2xl font-semibold mb-1">${plan.name}</h3>
      <p class="text-white-70 mb-6">
        $${plan.minAmount} - $${plan.maxAmount}
      </p>
      
      <div class="mb-6">
        <p class="text-3xl font-bold text-e73667">${plan.returnRate}</p>
        <p class="text-white-70">Return ${plan.returnPeriod}</p>
      </div>
      
      <ul class="space-y-2 mb-6">
        ${plan.features.map(feature => `
          <li class="flex items-start">
            <svg class="h-5 w-5 mr-2 text-e73667 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
            <span>${feature}</span>
          </li>
        `).join('')}
      </ul>
      
      <a href="register.html" class="w-full">
        <button class="w-full bg-e73667 hover-bg-e73667-90 text-white hover-translate-y-negative-2px transition-transform py-3 rounded">
          Get Started
        </button>
      </a>
    `;
    
    investmentPlansContainer.appendChild(planCard);
  });

  // Helper function to get SVG path for icons
  function getIconPath(iconName) {
    const iconPaths = {
      'shield': '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>',
      'star': '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>',
      'diamond': '<path d="M6 3h12l4 6-10 13L2 9z"></path><path d="M18 9H6"></path><path d="M12 3v18"></path>',
      'crown': '<path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"></path>'
    };
    return iconPaths[iconName] || '';
  }
});
