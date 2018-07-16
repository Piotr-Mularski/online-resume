import './../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
	constructor(className1, className2) {
		this.itemsToReveal = [...document.querySelectorAll(className1), ...document.querySelectorAll(className2)];
		this.hideInitialy();
		this.createWaypoints();
	}

	hideInitialy() {
		this.itemsToReveal.forEach((item) => {
			item.classList.add('reveal-item');
		});
	}

	createWaypoints() {
		this.itemsToReveal.forEach((item) => {
			new Waypoint({
				element: item,
				handler: () => {
					item.classList.add('reveal-item--is-visible');
				},
				offset: '85%'
			});
		});
	}
}

export default RevealOnScroll;