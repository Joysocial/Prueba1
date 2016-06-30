var myImage = document.querySelector('img');

// Funcion al hacer click en objeto contenido en myImage
myImage.onclick = function() {
	// Obtener el valor de
	var mySrc = myImage.getAttribute('src');

	if (mySrc === 'images/bosque.png') {
		myImage.setAttribute ('src','images/bosque1.png');
	} else {
		myImage.setAttribute ('src','images/bosque.png');
	}
}