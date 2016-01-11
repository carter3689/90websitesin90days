//Provide the user with a scrambled word
//Take in the user's string and evaluate it
//If it is true(corret word) give them a congragulations
//If it is false(incorrect) ask them to guess again

var wordBank = ["Chicago", "BasketBall", "ThunderSticks", "Bulls", "VideoGames"]

var randomWord = function(){
	return wordBank[Math.floor(Math.random() * wordBank.length)]
};

var word = randomWord();


console.log(word);

document.getElementById('randomWord').innerHTML = word;





