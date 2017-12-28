var a = prompt('Set base lenght');
var h = prompt('Set height');

function getTriangleArea(a, h) {
	if (a <= 0 || h <= 0) {
		return('Incorrect values');
	} else {
		return(a*h/2);
	}
}

var triangleArea = getTriangleArea(a, h);

console.log(triangleArea);

var triangleArea1 = getTriangleArea(6, 18),
	triangleArea2 = getTriangleArea(3, 4),
	triangleArea3 = getTriangleArea(8, 12);