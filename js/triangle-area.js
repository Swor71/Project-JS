
var a = prompt('Enter base lenght');
var h = prompt('Enter height');
var triangleArea = a*h/2;
var result = 'Triangle field with base a: ' + a + ' and height h: ' + h + ' is equal to: ' + triangleArea;

console.log(result);
document.getElementById('name').innerHTML = result;