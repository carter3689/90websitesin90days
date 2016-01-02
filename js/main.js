var myHeading = document.querySelector('h1');
myHeading.textContent = 'Happy New Year!'

function inputText() {
	var input = document.getElementById("textarea").value;
	document.getElementById("duplicated-text").innerHTML ="Here's what you wrote" + input;
}