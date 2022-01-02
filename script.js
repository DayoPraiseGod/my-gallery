
let theme = localStorage.getItem('theme');

if (theme == null) {
	setTheme('light');
} else {
	setTheme(theme);
}


let themeBoxes = document.getElementsByClassName('themes');

for (let i=0; themeBoxes.length > i; i++) {
	themeBoxes[i].addEventListener('click', function() {
		let mode = this.dataset.mode;
		setTheme(mode);
	})
}

function setTheme(mode) {
	if (mode == 'light') {
		document.getElementById('theme-selector').href = "style.css";
	}
	if (mode == 'pink') {
		document.getElementById('theme-selector').href = "pink.css";
	}
	if (mode == 'blue') {
		document.getElementById('theme-selector').href = "blue.css";
	}
	if (mode == 'green') {
		document.getElementById('theme-selector').href = "green.css";
	}

	localStorage.setItem('theme', mode);
}

