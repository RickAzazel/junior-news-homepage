const burgerOpen = document.querySelector('.header__burger-open');
const burgerClose = document.querySelector('.header__burger-close');

/* ===================== Functions ===================== */
const burgerMenuAppearance = (command) => {
	const headerList = document.querySelector('.header__list');
	const headerMenu = document.querySelector('.header__menu');

	if (command === 'show') {
		headerMenu.classList.add('active');
		headerList.classList.add('active');
		burgerClose.classList.add('active');
		burgerOpen.classList.remove('active');
	}
	else if (command === 'hide') {
		headerMenu.classList.remove('active');
		headerList.classList.remove('active');
		burgerClose.classList.remove('active');
		burgerOpen.classList.add('active');
	}
};

/* ===================== Events ===================== */
burgerOpen.addEventListener('click', () => {
	burgerMenuAppearance('show');
});

burgerClose.addEventListener('click', () => {
	burgerMenuAppearance('hide');
});

window.addEventListener('click', (e) => {
	const headerMenu = document.querySelector('.header__menu');

	if (e.target === headerMenu) {
		burgerMenuAppearance('hide');
	}
})


