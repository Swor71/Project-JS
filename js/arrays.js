var maleNames = ['Tom', 'Jim', 'Alex', 'Joe', 'Matt'];
var femaleNames = ['Ann', 'Sue', 'Dorothy', 'Roxy', 'Jenny'];

var allNames = maleNames.concat(femaleNames);

console.log(allNames);

var newName = 'Marian';

if (allNames.indexOf(newName) === -1) {
	allNames.push(newName);
}

console.log(allNames);