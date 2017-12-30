var n = prompt('How many levels does the Christmas Tree have?');

function drawTree(n) {

	for(var i = 1; i <= n; i++) {
		var star = '';

		for(var j = 1; j <= i; j++) {
			star += '*';
		}
		console.log(star);
	}
}

drawTree(n);