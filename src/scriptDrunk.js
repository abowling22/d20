var drunkBtn = document.querySelector("#drunkBtn");
console.log(drunkBtn);

function randomNumberGenerator1() {
	var randomNumber = Math.floor(Math.random() * 20);
	alert(randomNumber + 1);
}

drunkBtn.addEventListener("click", randomNumberGenerator1);

function randomDrunkNumber() {
}