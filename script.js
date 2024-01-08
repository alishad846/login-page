function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      document.querySelector('.toggle-password').style.backgroundImage = "url('eye-off-icon.png')";
    } else {
      passwordInput.type = 'password';
      document.querySelector('.toggle-password').style.backgroundImage = "url('eye-icon.png')";
    }
  }
  