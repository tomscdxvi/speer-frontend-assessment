document.querySelector('.button1').onmousemove = function (e) {

	var x = e.pageX - e.target.offsetLeft;
	var y = e.pageY - e.target.offsetTop;

	e.target.style.setProperty('--x', x + 'px');
	e.target.style.setProperty('--y', y + 'px');
};

document.querySelector('.button2').onmousemove = function (e) {

	var x = e.pageX - e.target.offsetLeft;
	var y = e.pageY - e.target.offsetTop;

	e.target.style.setProperty('--x', x + 'px');
	e.target.style.setProperty('--y', y + 'px');
};