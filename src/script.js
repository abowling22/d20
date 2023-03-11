var btnD20 = document.querySelector("#btnD20");
var btnD6 = document.querySelector("#btnD6");

var dice = new Dice();

btnD20.addEventListener("click", function() { 
	dice.randomNumberGenerator(20);
});

btnD6.addEventListener("click", function() { 
	dice.randomNumberGenerator(6);
});

// var btn = document.querySelector("#btn");
// // document = the whole website
// //querySelector = built in function to search through for the first element with the matching name
// // #btn is used to symbolize the id in html. class is a . instead of the #

// function randomNumberGenerator1() {
// 	var randomNumber = Math.floor(Math.random() * 20);
// 	alert(randomNumber + 1);
// }
// // alert(randomNumber)is saying to put the the result of the var randomNumber in an alert. 

// btn.addEventListener("click", randomNumberGenerator1);

// //btn is the variable, add event listener is a method looking for a click and then is calling the function randomNumberGenerator.

// // how to reference an id #name

// //uses Ids in HTML for javascript use classes in CSS 
