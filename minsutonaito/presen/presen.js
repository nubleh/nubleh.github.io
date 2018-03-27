(function(){
	var duration = 900000; // 15 minutes
	startTime = null;

	var timeBar = document.getElementById('timeBar');
	var timeChicken = document.getElementById('timeChicken');
	var timeMob = document.getElementById('timeMob');
	var screen = document.getElementById('screen');

	var loopInterval = null;

	var slideAt = 0;
	if (!isNaN(parseInt(window.location.hash.replace('#', '')))){
		slideAt = parseInt(window.location.hash.replace('#', ''));
		if(slideAt > 0) {
			startTimer();
		}
	}
	slides = document.getElementsByClassName('slide');

	var dragging = false;
	var dragStart = null;
	timeMob.onmousedown = function(e){
		dragging = true;
		dragStart = e.clientX;
		return false;
	};
	timeMob.onmouseup = function(){
		dragging = false;
	};
	window.onmousemove = function(e){
		if (!dragging) {
			return;
		}
		if(e.buttons < 1) {
			dragging = false;
			return;
		}
		var diff = e.clientX - dragStart;
		var diffPerSlide = window.innerWidth / slides.length;

		if(diff > diffPerSlide) {
			dragStart = e.clientX;
			var steps = Math.abs(Math.round(diff/diffPerSlide));
			nextSlide(steps);
		}
		if (diff < 0-diffPerSlide) {
			dragStart = e.clientX;
			var steps = Math.abs(Math.round(diff/diffPerSlide));
			prevSlide(steps);
		}
	};

	function updateStuff(){
		var now = (new Date()).getTime();
		if(startTime == null) {
			return;
		}
		var diff = now - startTime;
		var timePer = Math.round(Math.min(1, (diff/duration)) * timeBar.offsetWidth);
		timeChicken.style.left = timePer + 'px';

		var slidePer = Math.round((slideAt/Math.max(1, slides.length - 1)) * timeBar.offsetWidth);
		timeMob.style.left = slidePer + 'px';
	};
	function hideAllSlides(){
		for(var x = 0; x < slides.length; x++) {
			slides[x].classList.remove('active');
			slides[x].querySelectorAll('.image').forEach(function(el){
				el.classList.remove('zoom');
				el.classList.remove('zoom2');
			});
		}
	};
	function updateSlides(){
		window.location.hash = slideAt;
		if (slideAt >= slides.length) {
			screen.classList.add('showAll');
			screen.querySelectorAll('img').forEach(function(el){
				if(el.dataset.src) {
					el.src = '';
					el.src = el.dataset.src;
				}
			});
			return;
		}
		screen.classList.remove('showAll');

		hideAllSlides();

		var slideIndex = slideAt;
		var slide = slides[slideIndex];
		var extra = slide.dataset;

		while (slide.classList.contains('dummy')) {
			slideIndex -= 1;
			slide = slides[slideIndex];
		}
		slide.classList.add('active');
		slide.querySelectorAll('img').forEach(function(el){
			if(el.dataset.src) {
				el.src = '';
				el.src = el.dataset.src;
			}
		});

		if (extra.addClass) {
			slide.classList.add(extra.addClass);
		}
		if (extra.removeClass) {
			slide.classList.remove(extra.removeClass);
		}
		updateStuff();
	};
	function nextSlide(steps){
		if (typeof steps !== 'number') {
			var steps = 1;
		}
		slideAt = Math.min(slides.length, slideAt += steps);
		updateSlides();
		if (loopInterval == null) {
			startTimer();
		}
	};
	function prevSlide(steps){
		if (typeof steps !== 'number') {
			var steps = 1;
		}
		slideAt = Math.max(0, slideAt -= steps);
		updateSlides();
	};
	screen.onclick = function(e){
		if(e.target.tagName === 'IMG' && e.target.parentElement.className){
			if(e.target.width > e.target.height) {
				e.target.parentElement.classList.toggle('zoom2');
			} else {
				e.target.parentElement.classList.toggle('zoom');
			}
		} else {
			nextSlide();
		}
	};
	window.onkeyup = function(e){
		if (e.code === 'Space' || e.code === 'ArrowRight') {
			nextSlide();
		}
		if (e.code === 'ArrowLeft') {
			prevSlide();
		}
	};

	function startTimer(){
		startTime = (new Date()).getTime();
		loopInterval = setInterval(updateStuff, 1000);
	};
	updateSlides();
	updateStuff();
})();
