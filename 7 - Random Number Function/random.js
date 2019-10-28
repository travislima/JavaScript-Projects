function randomNumber (lower, upper) {
	if( isNaN(lower) || isNaN(upper)) {
		throw new Error('Both arguments must be numbers');
	}
	return Math.floor(Math.random() * (upper - lower + 1)) + lower; 
}

console.log( randomNumber (1, 10));
console.log( randomNumber ('two', 10));

