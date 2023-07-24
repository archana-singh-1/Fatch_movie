const box=document.getElementsByClassName("box");
const red_button = document.getElementById("red");
red_button.onclick=function() {
	box[0].style.backgroundColor="red"
}


const box2=document.getElementsByClassName("box");
const green_button = document.getElementById("green");
green_button.onclick=function() {
	box[0].style.backgroundColor="green"
}


const box3=document.getElementsByClassName("box");
const yellow_button = document.getElementById("yellow");
yellow_button.onclick=function() {
	box[0].style.backgroundColor="yellow"
}


const box4=document.getElementsByClassName("box");
const pink_button = document.getElementById("pink");
pink_button.onclick=function() {
	box[0].style.backgroundColor="pink"
}


const change=document.getElementById("color");
const colo=document.getElementById("click");
colo.onclick=function(){
	color.style.backgroundColor="purple"
	color.innerHTML="Now i'm doing study";
}


