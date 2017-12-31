var button = document.getElementById('addElem');
var list = document.getElementById('list');
var counter = 0;

button.addEventListener('click', addListItem);

function addListItem() {
	var newListItem = document.createElement('li');

	counter++;

	newListItem.innerHTML = 'item '+counter;

	list.appendChild(newListItem);
};