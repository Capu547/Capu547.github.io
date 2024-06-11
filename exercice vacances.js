"bouton d'utilisateur"
let myButton=document.querySelector('Button');
let myHeading = document. querySelector ( h1 ');

function setUserName () {
	let myName = prompt( 'veuillez saisir votre nom.');
	localStorage. setItem ('non' , myName) :
	myHeading.textContent = 'bientot en vacances, ' + myName;
}

if (!localStorage.getItem ('nom')) {
setUserName ();
} else {
	let storeName = localStorage.getItem ('nom');
	myHeading. textContent = 'bientot en vacances, ' + storeName;
}
myButton. addEventListener ('click', function () {
	setUsername();
});