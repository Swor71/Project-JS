var withElementClass = document.getElementsByClassName('button');

console.log(withElementClass);

for(i=0; i<=withElementClass.length; i++) {
	alert(withElementClass[i].innerHTML);
}