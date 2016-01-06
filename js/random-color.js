document.getElementById('button').onclick=randomcolor;
function randomcolor(){
	document.getElementById('background').style.background =randomColors();
}

function randomColors(){
	console.log("I'm working now")
	return '#' + Math.floor(Math.random() * 16777215).toString(16);
	

}

