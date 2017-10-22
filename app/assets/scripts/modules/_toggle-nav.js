function ToggleNav() {
	const navButton = document.querySelector('.main-nav__toggle-menu');
	const navList = document.querySelector('.main-nav ul');

	navButton.addEventListener('click', (e) => {
		e.preventDefault();
		navList.classList.toggle('is-active')}
		);
}

export default ToggleNav;