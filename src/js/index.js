const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const arrowRight = $('.arrow-right');
const arrowLeft = $('.arrow-left');
const imagesContainer = $$('.carousel__images div');
const carousel = $('.carousel__images');

// ? indice que se utilizara para saber que elemento mostrar en el carousel.
// let currentIndex = Math.floor(imagesContainer.length / 2);
let currentIndex = 0;
let moveDirection = 0;

// ? Ancho minimo de las imagenes (revisar css y cambiarlo según a eso)
const widthImages = 90;

const handleNext = () => {
	imagesContainer[currentIndex].classList.remove('show');

	currentIndex >= imagesContainer.length - 1
		? (currentIndex = 0)
		: currentIndex++;
	imagesContainer[currentIndex].classList.add('show');

	// ? Desplazar el carousel
	moveDirection <= 0
		? (moveDirection -= widthImages)
		: (moveDirection = -widthImages);

	carousel.style.transform = `translate(${moveDirection}px)`;
	// carousel.style.transform = `translate(-260px)`;
	console.log(moveDirection);
	// carousel.style.transform = `translateX(${moveDirection}px)`;
	carousel.style.transition = 'transform .5s ease';
};

const handlePrevius = () => {
	imagesContainer[currentIndex].classList.remove('show');

	currentIndex === 0
		? (currentIndex = imagesContainer.length - 1)
		: currentIndex--;
	imagesContainer[currentIndex].classList.add('show');

	moveDirection >= 0
		? (moveDirection += widthImages)
		: (moveDirection = widthImages);
	console.log(moveDirection);
	carousel.style.transform = `translateX(${moveDirection}px)`;
	carousel.style.transition = 'transform .5s ease';
};

// ? Agrega la clase show al elemento medio del array o sea a la image del medio (no importa cuantas agregues).
const addStyleMiddleImage = () => {
	imagesContainer[currentIndex].classList.add('show');

	// carousel.style.transform = `translateX(${
	// -(imagesContainer.length / 2 - 2.25) * widthImages
	// }px)`;
};

// ? DOMCOntentLoaded le dices al navegador que ni bien termine de renderizar el HTML cargue el script.
document.addEventListener('DOMContentLoaded', addStyleMiddleImage);
arrowLeft.addEventListener('click', handleNext);
arrowRight.addEventListener('click', handlePrevius);
