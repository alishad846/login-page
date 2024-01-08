function togglePasswordVisibility() {
  const passwordInput = document.getElementById('password');
  const toggleButton = document.querySelector('.toggle-password');

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    toggleButton.style.backgroundImage = "url('eye-off-icon.png')";
  } else {
    passwordInput.type = 'password';
    toggleButton.style.backgroundImage = "url('eye-icon.png')";
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const textOptions = [" Police", "Hackathon"];

  const textElement = document.querySelector('.text');

  function updateText() {
    let currentIndex = 0;

    setInterval(function() {
      textElement.textContent = textOptions[currentIndex];
      currentIndex = (currentIndex + 1) % textOptions.length;
    }, 2000);
  }

  // Start updating the text
  updateText();

  // Add event listener for window resize to update background animation
  window.addEventListener('resize', function() {
    document.querySelector('.background-animation').style.animation = 'none';
    void document.querySelector('.background-animation').offsetWidth; // Trigger reflow
    document.querySelector('.background-animation').style.animation = 'backgroundAnimation 15s infinite alternate';
  });
});
