//get current location input from the user and store it
//Get future location input from the user and store it
//Find out the time difference between the two locations once the submit button is clicked



function timezone(){
	var city = document.getElementById('currentCity').value;
console.log(city) 
}

function future() {
	var destination = document.getElementById('futuredestination').value;
console.log(destination)
}

function timeshift() {
	timezone();
	future();
}

function ultimateshift(){
	if (timezone = future){
		document.write("These are different timezones")
	}

}


