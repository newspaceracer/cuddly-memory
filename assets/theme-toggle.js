document.addEventListener('DOMContentLoaded', (event) => {
  const themeSwitch = document.querySelector('.toggle-theme');
  const checkbox = document.getElementById('checkbox');

  // Proceed only if both elements are found
  if (themeSwitch && checkbox) {
	// Check the preference and update the current theme on page load
	const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
	if (currentTheme) {
	  document.documentElement.setAttribute('data-theme', currentTheme);
	  
	  if (currentTheme === 'dark') {
		checkbox.checked = true;
	  }
	}

	checkbox.addEventListener('change', function () {
	  // If the checkbox is checked, set the theme to dark, else light
	  if (this.checked) {
		trans();
		document.documentElement.setAttribute('data-theme', 'dark');
		localStorage.setItem('theme', 'dark');
	  } else {
		trans();
		document.documentElement.setAttribute('data-theme', 'light');
		localStorage.setItem('theme', 'light');
	  }
	});
  } else {
	console.error("The theme toggle elements don't exist.");
  }
  
  // Function to smooth the transition of the theme change
  let trans = () => {
	document.documentElement.classList.add('transition');
	window.setTimeout(() => {
	  document.documentElement.classList.remove('transition');
	}, 1000);
  };
});
