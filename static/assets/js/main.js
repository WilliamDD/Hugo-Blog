window.onload = function(){
	document.querySelector('.navbar-burger').onclick = function() {
		document.querySelector('.navbar-burger').classList.toggle('is-active');
		document.querySelector('#navbar-main').classList.toggle('is-active');
	};
};