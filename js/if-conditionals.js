var a = prompt('Assign the first value');
var b = prompt('Assign the second value');
var value = (a * a) - (2 * a * b) + (b * b);

console.log(value);

if (value < 0) {
	console.log('The result is less than zero');
} else if (value > 0) {
	console.log('The result is grater than zero');
} else {
	console.log('The result is equal to zero');
}