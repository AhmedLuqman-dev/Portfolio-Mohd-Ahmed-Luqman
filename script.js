function toggleTheme() {
  document.body.classList.toggle('light-mode');

  const bulb = document.getElementById('bulb-icon');

  // Switch bulb icon color
  if (document.body.classList.contains('light-mode')) {
    bulb.src = "https://img.icons8.com/ios-filled/50/000000/light-on.png"; // black bulb for light theme
  } else {
    bulb.src = "https://img.icons8.com/ios-filled/50/ffffff/light-on.png"; // white bulb for dark theme
  }

  // Swing animation
  bulb.classList.add('swing');
  setTimeout(() => bulb.classList.remove('swing'), 600);
}
