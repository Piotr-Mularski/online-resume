class ToggleNav {
	constructor() {
		this.navButton = document.querySelector('.main-nav__toggle-menu');
		this.navList = document.querySelector('.main-nav ul');
		this.navLinks = document.querySelectorAll('.main-nav__link');
		this.addToggle();
		this.closeOnLink();
	}

	addToggle() {
		this.navButton.addEventListener('click', (e) => {
			e.preventDefault();
			this.navList.classList.toggle('is-active');
		});
	}

	closeOnLink() {
		this.navLinks.forEach((link) => {
			link.addEventListener('click', () => {
				this.navList.classList.remove('is-active');
			});
		});
	}
}

export default ToggleNav;