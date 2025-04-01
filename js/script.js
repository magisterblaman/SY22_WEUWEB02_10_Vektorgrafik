let leftEye = document.querySelector('#left-eye');
let rightEye = document.querySelector('#right-eye');
let nose = document.querySelector('#nose');
let mouth = document.querySelector('#mouth');

nose.addEventListener('click', boopListener);

function boopListener(event) {
	if (leftEye.getAttribute('fill') === 'blue') {
		leftEye.setAttribute('fill', 'red');
		rightEye.setAttribute('fill', 'red');
		mouth.classList.add('upside-down');
	} else {
		leftEye.setAttribute('fill', 'blue');
		rightEye.setAttribute('fill', 'blue');
		mouth.classList.remove('upside-down');
	}
}