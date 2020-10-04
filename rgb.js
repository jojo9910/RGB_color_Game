
colors =getrandomnumbers(6);
var square = document.querySelectorAll(".square")
var colorpicked=colors[getRNDnumber()];
var displaymessage = document.querySelector("#message");
var reset = document.querySelector("#playagain");
var h1 = document.querySelector("h1");
var showcolor = document.getElementById("colordisplay");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");

showcolor.textContent = colorpicked;
for(var i=0;i<square.length;i++){
square[i].style.backgroundColor=colors[i];
//to check whether picked color is matched color or not
square[i].addEventListener("click",function(){
var color = this.style.backgroundColor;
console.log(color, colorpicked);
if(color === colorpicked){
	h1.style.backgroundColor = colorpicked;
	reset.textContent = "Play again?"
	displaymessage.textContent = "correct";
	for(var j=0;j<square.length;j++){
		square[j].style.backgroundColor = colorpicked;
	}
}
else{
	this.style.backgroundColor = "#232323";
	displaymessage.textContent = "Try again";
}
});
}

// fnuction to generate random number
function getRNDnumber(){
	return Math.floor(Math.random()*colors.length);

}
function getnum(){
	return Math.floor(Math.random()*256);
}

function getrandomnumbers(num){
	arr =[];
	for(var i=0;i<num;i++)
	arr.push(getRNDcolors());
	return arr;
}

function getRNDcolors(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
   
    return "rgb(" + r + ", " + g + ", " + b + ")";

}

// to reset the game
reset.addEventListener("click",function(){
if(colors.length === 3)
num =3;
else num=6;
colors =getrandomnumbers(num);
//console.log(colors.length);
colorpicked=colors[getRNDnumber()];
showcolor.textContent = colorpicked;
h1.style.backgroundColor = "steelblue";
reset.textContent = "New colors";
displaymessage.textContent = "";
for(var i=0;i<square.length;i++){
square[i].style.backgroundColor=colors[i];}
});

// for easy mode reset all events

easy.addEventListener("click",function(){
easy.classList.add("selected");
hard.classList.remove("selected");
colors =getrandomnumbers(3);
//console.log(colors.length);
colorpicked = colors[getRNDnumber()];
showcolor.textContent = colorpicked;
h1.style.backgroundColor = "steelblue";
reset.textContent = "New colors";
displaymessage.textContent = "";
for(var i=0;i<3;i++){
square[i].style.backgroundColor=colors[i];}
for(var i=3;i<square.length;i++)
	square[i].classList.remove("square");
});


hard.addEventListener("click",function(){
hard.classList.add("selected");
easy.classList.remove("selected");
colors =getrandomnumbers(6);
//console.log(colors.length);
colorpicked = colors[getRNDnumber()];
showcolor.textContent = colorpicked;
h1.style.backgroundColor = "steelblue";
reset.textContent = "New colors";
displaymessage.textContent = "";
for(var i=3;i<square.length;i++)
square[i].classList.add("square");
for(var i=0;i<square.length;i++)
square[i].style.backgroundColor=colors[i];
});

