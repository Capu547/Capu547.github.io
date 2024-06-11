let myImage = document.querySelector('img');

myImage.addEventListener('click', function()  {
	let mySrc = myImage;getAttribute('src');
if(mySrc === 'Image/fleur-de-cerisier (1).png') {
	myImage.setAttribute ('src','image/palmier au bord de la ler.png');
}	else {
	myImage.setAttribute ('src','image/palmier au bord de la mer (1).png');
}
=);