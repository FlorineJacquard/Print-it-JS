const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

// Initialisation du slide courant
let currentSlide = 0;

// Récupération des éléments
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const dotsContainer = document.querySelector(".dots");

// Fonction pour mettre à jour le slide
function updateSlide() {
	const slide = slides[currentSlide];
	// Mise à jour de l'image
	document.querySelector('.banner-img').src = `./assets/images/slideshow/${slide.image}`;
	// Mise à jour du texte
	document.querySelector('#banner p').innerHTML = slide.tagLine; 
	// Mise à jour des bullets points
	const dots = document.querySelectorAll(".dot");
	dots.forEach((dot, index) => {
		dot.classList.toggle("dot_selected", index === currentSlide);
	});
}

// Fonction pour le slide suivant
function nextSlide() {
	currentSlide = (currentSlide + 1) % slides.length;
	updateSlide();
}

// Fonction pour le slide précédent
function previousSlide() {
	currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
	updateSlide();
}

// Écouteurs d'événements sur les flèches
arrowLeft.addEventListener('click', () => {
	previousSlide();
});

arrowRight.addEventListener('click', () => {
	nextSlide();
});

// Création des bullets points
function createDots() {
	for (let i = 0; i < slides.length; i++) {
		let divDot = document.createElement("div");
		divDot.classList.add("dot");
		if (i === 0) {
			divDot.classList.add("dot_selected");
		}
		dotsContainer.appendChild(divDot);
	}
}

// Initialisation du carrousel au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
	// Initialiser le carrousel avec le premier slide
	updateSlide();
	// Créer les points pour chaque slide
	createDots();
});
