togglers = document.querySelectorAll(".toggler");

function showElement(event) {
	let toggler = event.target;
	let toggled = toggler.nextElementSibling;
	toggled.classList.toggle("shown");
}

for (let i = 0; i < togglers.length; i++) {
	togglers[i].addEventListener("click", showElement);
}