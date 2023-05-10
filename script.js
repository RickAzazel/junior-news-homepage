const burgerOpen = document.querySelector('.header__burger-open');
const burgerClose = document.querySelector('.header__burger-close');
const headerMenu = document.querySelector('.header__menu');

burgerOpen.addEventListener('click', () => {
	showBurgerMenu();
});

burgerClose.addEventListener('click', () => {
	hideBurgerMenu();
});

headerMenu.addEventListener('click', () => {
	hideBurgerMenu();
});


const showBurgerMenu = () => {
	const headerList = document.querySelector('.header__list');

	headerMenu.classList.add('active');
	headerList.classList.add('active');
	burgerClose.classList.add('active');
	burgerOpen.classList.remove('active');
};

const hideBurgerMenu = () => {
	const headerList = document.querySelector('.header__list');

	headerMenu.classList.remove('active');
	headerList.classList.remove('active');
	burgerClose.classList.remove('active');
	burgerOpen.classList.add('active');
};