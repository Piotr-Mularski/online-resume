import './../../node_modules/waypoints/lib/noframework.waypoints';

class ScrollSpy {
	constructor() {
		this.links = document.querySelectorAll('.main-nav__link');
		this.elements = document.querySelectorAll('.linked-section');
		this.sectionWaypoints();
	}

	sectionWaypoints() {
		this.elements.forEach((element) => {
			new Waypoint({
				element,
				handler: (direction) => {
					if(direction === 'down') {
						const matchingLink = element.getAttribute('data-link');
						this.links.forEach(link => link.classList.remove('main-nav__link--active'));
						document.querySelector(matchingLink).classList.add('main-nav__link--active');
					}
				},
				offset: '25%'
			});

			new Waypoint({
				element,
				handler: (direction) => {
					if(direction === 'up') {
						const matchingLink = element.getAttribute('data-link');
						this.links.forEach(link => link.classList.remove('main-nav__link--active'));
						document.querySelector(matchingLink).classList.add('main-nav__link--active');
					}
				},
				offset: '-60%'
			});
		});
	}
}

export default ScrollSpy;