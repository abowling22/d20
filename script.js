
var btn = document.querySelector("#btn");
// document = the whole website
//querySelector = built in function to search through for the first element with the matching name
// #btn is used to symbolize the id in html. class is a . instead of the #


function randomNumberGenerator() {
	var randomNumber = Math.floor(Math.random() * 21);
	alert(randomNumber);
}

// alert(randomNumber)is saying to put the the result of the var randomNumber in an alert. 


btn.addEventListener("click", randomNumberGenerator);

//btn is the variable, add event listener is a method looking for a click and then is calling the function randomNumberGenerator.

//console.log(randomNumberGenerator());

// how to reference an id #name

//uses Ids in HTML for javascript use classes in CSS 