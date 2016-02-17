function blurFun(){
var fName = document.getElementById("fn");
fName.value = fName.value.toLowerCase();
}

function blurFun1(){

var lName = document.getElementById("ln");
lName.value = lName.value.toUpperCase();
}

function changeLocation(){
	var prefer = document.forms[0].place.value;
	document.getElementById("demo").innerHTML = prefer;
	alert("you select" + prefer);

}

function changeBackground(passWord){
	psw.style.color = "white";
	psw.style.background = "cyan";

}
function selectText(){
document.getElementById("demo").innerHTML = alert("you selected some text");

}

function submitInput(){
fName = document.forms[0].fn.value;
alert("you are directed to Google page");
}

function resetFun(){
	alert("Data you entered is cleared!!");
}
function keyFunction1(message){
	message = "check into console again";
console.log(message);

}
function keyFunction2(message){
	message = "check into console again";
console.log(message);

}