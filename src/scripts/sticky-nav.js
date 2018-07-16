const stickyNav = () => {
	const nav = document.querySelector('.main-nav');
	const topOfNav = nav.offsetTop;

	const fixNav = () => {
		if (topOfNav <= window.scrollY) {
			nav.classList.add('main-nav--fixed');
			document.body.style.paddingTop = `${nav.offsetHeight}px`;
		} else {
			nav.classList.remove('main-nav--fixed');
			document.body.style.paddingTop = 0;
		}
	};

	window.addEventListener('scroll', fixNav);
};

export default stickyNav;