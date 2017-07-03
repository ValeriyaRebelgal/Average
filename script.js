/**
* Road map
* 1 - set autoSlider function
* 2 - function timer running
*/
autoSlider();
var left = 0;
var timer = 0;

/** Run timer for autoSlider function 
* Set cycle for the images
*/

function autoSlider() {
	timer = setTimeout(function() {
	    var line = document.getElementById('line');
		left = left - 128;
		if (left < -512) {
			left = 0;
			clearTimeout(timer);
		}
		line.style.left = left + 'px';
		autoSlider();
	}, 2000);
}
