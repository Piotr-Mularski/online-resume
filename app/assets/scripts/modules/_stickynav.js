function StickyNav() {
		const nav = document.querySelector('.main-nav');
		const topOfNav = nav.offsetTop;
		console.log(topOfNav);
		console.log(window.scrollY);


		function fixNav(e) {
			if(topOfNav <= window.scrollY) {
				nav.classList.add('main-nav--fixed');
				document.body.style.paddingTop = nav.offsetHeight + 'px';
			}

			else {
				nav.classList.remove('main-nav--fixed');
				document.body.style.paddingTop = 0;
			}
		}

	window.addEventListener('scroll', fixNav);
};

export default StickyNav;