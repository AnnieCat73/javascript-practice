const btn = document.querySelector("button");
const fortune = document.querySelector("#fortune");


// The fortune responses
let responses = [
	'It is certain.',
	'It is decidedly so.',
	'Without a doubt.',
	'Yes - definitely.',
	'You may rely on it.',
	'As I see it, yes.',
	'Most likely.',
	'Outlook good.',
	'Yes.',
	'Signs point to yes.',
	'Reply hazy, try again.',
	'Ask again later.',
	'Better not tell you now.',
	'Cannot predict now.',
	'Concentrate and ask again.',
	'Don\'t count on it.',
	'My reply is no.',
	'My sources say no.',
	'Outlook not so good.',
	'Very doubtful.'
];

// Loading messages
let loading = [
	'Consulting the spirits...',
	'Gazing into the depths of the future...',
	'BRB, jumping into my time machine...',
	'I see... I see...'
];
/*btn.addEventListener("click", function () {
  fortune.textContent = "You're going to have a wonderful day!";
})

//or

function getFortune () {
  fortune.textContent = "You're going to have a wonderful day!";
}
*/

btn.addEventListener("click", getFortune)


//Get a random fortune from array above

function shuffle (array) {

	let currentIndex = array.length;
	let temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;

}

function getFortune () {
	shuffle(responses);
	fortune.textContent = responses[0];
}