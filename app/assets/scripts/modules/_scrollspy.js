function ScrollSpy() {
	const elements = document.querySelectorAll('.linked-section');
	const links = document.querySelectorAll('.main-nav__link');

	function debounce(func, wait = 5, immediate = true) {
		var timeout;
		return function() {
			var context = this, args = arguments;
			var later = function() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		};
	}

	function switchCurrent(currLink){
			document.querySelectorAll('.main-nav__link--active').forEach(curr => curr.classList.remove('main-nav__link--active'));
			currLink.classList.add('main-nav__link--active');
	}

	function checkCurrent() {
	//if pageY is between top of the segment (or slighty higher) and the bottom 
	elements.forEach((element) => {
		const top = element.offsetTop + 80;
		const bottom = element.offsetTop + element.offsetHeight;
		const position = window.pageYOffset + window.innerHeight;
		const trigger = position - element.offsetHeight/4;

	
		if(trigger > top && trigger < bottom) {
			const currLink = document.querySelector(element.dataset['link']);
			switchCurrent(currLink);
		}			

	});
}

	function linkSwitch() {
		console.log(this);
		switchCurrent(this);

	}


	links.forEach(function(link) {
		link.addEventListener('click', linkSwitch);
	});

	window.addEventListener('load', function(){
		checkCurrent();
	});

	window.addEventListener('scroll', debounce(checkCurrent));
}

export default ScrollSpy;