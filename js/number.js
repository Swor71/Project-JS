var avatar = faker.fake("<img src='{{image.avatar}}' alt='av'>");
var name = faker.fake("{{name.lastName}}, {{name.firstName}} {{name.suffix}}");
document.getElementById('name').innerHTML = name + avatar;