let drawingSurface = document.getElementById('drawing-surface');
let myShape = document.getElementById('my-shape');

drawingSurface.addEventListener('click', addPoint);

function addPoint(event) {
	let oldPoints = myShape.getAttribute('points');
	let x = event.offsetX / drawingSurface.clientWidth * 100;
	let y = event.offsetY / drawingSurface.clientHeight * 50;
	oldPoints += ' ' + x + ',' + y;
	myShape.setAttribute('points', oldPoints);

	let newEllipse = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
	newEllipse.setAttribute('cx', x);
	newEllipse.setAttribute('cy', y);
	newEllipse.setAttribute('rx', 3);
	newEllipse.setAttribute('ry', 3);

	drawingSurface.appendChild(newEllipse);
}