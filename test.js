var btn = document.querySelector("#btn");


class Dice {
  }
  randomNumberGenerator(side) {
    var randomNumber = Math.floor(Math.random(side));
    return this.side *
    //alert(randomNumber + 1);
  }





var d6 = new Dice(6);
var d20 = new Dice(20);

console.log(d6.randomNumberGenerator);





var btn = document.querySelector("#btn");
// document = the whole website
//querySelector = built in function to search through for the first element with the matching name
// #btn is used to symbolize the id in html. class is a . instead of the #

function randomNumberGenerator1() {
	var randomNumber = Math.floor(Math.random() * 20);
	alert(randomNumber + 1);
}
// alert(randomNumber)is saying to put the the result of the var randomNumber in an alert. 

btn.addEventListener("click", randomNumberGenerator1);

//btn is the variable, add event listener is a method looking for a click and then is calling the function randomNumberGenerator.

// how to reference an id #name

//uses Ids in HTML for javascript use classes in CSS 

