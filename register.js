
// Wait for DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Register form submission
  const registerForm = document.getElementById('register-form');
  const registerButton = document.getElementById('register-button');
  const originalButtonText = registerButton.innerHTML;

  registerForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    // Simple validation
    if (!fullName || !email || !password || !confirmPassword) {
      showToast('Please fill in all fields', 'error');
      return;
    }
    
    // Validate passwords match
    if (password !== confirmPassword) {
      showToast('Passwords don\'t match', 'error');
      return;
    }
    
    // Show loading state
    registerButton.disabled = true;
    registerButton.textContent = 'Creating Account...';
    
    // Simulate account creation request
    setTimeout(() => {
      showToast('Account created!', 'success');
      registerButton.disabled = false;
      registerButton.innerHTML = originalButtonText;
      
      // Redirect to homepage after successful registration
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 1500);
    }, 1500);
  });
  
  // Simple toast notification function
  function showToast(message, type = 'info') {
    // Create toast element
    const toast = document.createElement('div');
    toast.className = `fixed top-4 right-4 z-50 p-4 rounded shadow-lg ${type === 'error' ? 'bg-red-500' : 'bg-green-500'} text-white max-w-xs`;
    toast.style.transform = 'translateY(-10px)';
    toast.style.opacity = '0';
    toast.style.transition = 'all 0.3s ease-in-out';
    
    // Add message
    toast.textContent = message;
    
    // Add to DOM
    document.body.appendChild(toast);
    
    // Animate in
    setTimeout(() => {
      toast.style.transform = 'translateY(0)';
      toast.style.opacity = '1';
    }, 10);
    
    // Remove after 3 seconds
    setTimeout(() => {
      toast.style.transform = 'translateY(-10px)';
      toast.style.opacity = '0';
      setTimeout(() => {
        document.body.removeChild(toast);
      }, 300);
    }, 3000);
  }
});
