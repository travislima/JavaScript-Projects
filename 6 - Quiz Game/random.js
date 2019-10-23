// quiz starts - no answers yet.
var correct = 0;

// questions that will be asked
var answer1 = prompt( "Name a programming language that's also a snake." );
if (answer1.toUpperCase() === 'PYTHON') {
	correct += 1;
}

var answer2 = prompt ( "What language do you use to style a web page?" );
if (answer2.toUpperCase() === "CSS" ) {
	correct += 1;
}

var answer3 = prompt ( "What language is also a gem?" );
if (answer3.toUpperCase() === "RUBY" ) {
	correct += 1;
}

var answer4 = prompt ( "What language do you use to structure a webpage?" );
if (answer4.toUpperCase() === "HTML" ) {
	correct += 1;
}

var answer5 = prompt ( "What language do you use to add interactivity to a web page? Clue: Think 'coffee' + Script." );
if (answer5.toUpperCase() === "JAVASCRIPT" ) {
	correct += 1;
}

// Output results
document.write ( "<p>You got " + correct + " out of 5 questions correct!</p>" );

//Output Rank
if (correct === 5 ) {
	document.write ("<p>You won a gold crown!</p>");

} else if (correct >= 3) {
	document.write ("<p>You won a silver crown!</p>");

} else if (correct >= 1) {
	document.write ("<p>You won a bronze crown!</p>");

} else {
	document.write ("<p>Sorry! No Crown for you :D!</p>");
}
