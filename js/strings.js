var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';

var dinosaur = 'triceratops'.toUpperCase();

var correctText = text.replace('Velociraptor', dinosaur);

console.log(correctText.substr(0, correctText.length/2));