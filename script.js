"use strict";

// *** Select Elements ***
const boxHistory = document.getElementById("box-history");
const boxSnippets = document.getElementById("box-snippets");
const boxAccess = document.getElementById("box-access");
const boxSupercharge = document.getElementById("box-supercharge");
const boxClipboard = document.getElementById("box-clipboard");

const quickSearch = document.querySelectorAll("#quick-search div");
const sneakPreview = document.querySelectorAll("#sneak-preview > div");
const logos = document.querySelectorAll("#logos li");

const footerElements = document.querySelectorAll("#footer-element > *");
console.log(footerElements);

const pc = document.getElementById("pc");
const devices = document.getElementById("devices");
// *** End of Select Elements ***

// *** Functionality ***
const option01 = {
	delay: 400,
	duration: 1000,
};

const option02 = {
	delay: 750,
	duration: 1000,
};

const option03 = {
	delay: 500,
	duration: 1000,
	easing: "ease-in-out",
	opacity: 0,
	scale: 0.9,
};

ScrollReveal().reveal([boxHistory, boxClipboard], option01);

ScrollReveal().reveal([boxSnippets, boxAccess, boxSupercharge], option02);

ScrollReveal().reveal([devices, pc], option03);

quickSearch.forEach((oneQuickSearch, index) => {
	ScrollReveal().reveal(oneQuickSearch, {
		delay: 200 * index,
		duration: 1000,
		origin: "bottom",
		distance: "50px",
		easing: "ease-in-out",
	});
});

sneakPreview.forEach((oneSneakPreview, index) => {
	ScrollReveal().reveal(oneSneakPreview, {
		delay: 200 * index,
		duration: 1000,
		origin: "left",
		distance: "50px",
	});
});

logos.forEach((logo, index) => {
	ScrollReveal().reveal(logo, {
		delay: 200 * index,
		duration: 1000,
		origin: "right",
		distance: "50px",
		easing: "ease-in-out",
	});
});

footerElements.forEach((footerElement, index) => {
	ScrollReveal().reveal(footerElement, {
		delay: 200 * index,
		duration: 1000,
		origin: "bottom",
		distance: "50px",
		easing: "ease-in-out",
		opacity: 0,
	});
});
// *** End of Functionality ***
