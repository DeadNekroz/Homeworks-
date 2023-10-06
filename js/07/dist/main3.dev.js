"use strict";

// створюю дів, ставлю в баді, додаю клас контейнер для зручності.
var Addcontainer = document.createElement('div');
document.body.append(Addcontainer);
Addcontainer.className = 'container';
var container = document.querySelector('.container');
container.innerHTML = '<div></div><div></div><div></div>';
container.children[0].style.backgroundColor = 'green', container.children[1].style.backgroundColor = 'yellow';
container.children[2].style.backgroundColor = 'red';
var marker = 0;

var _loop = function _loop(i) {
  container.childNodes[i].onclick = function light() {
    container.childNodes[i].classList.toggle('light');
  };
};

for (var i = 0; i < container.childNodes.length; i++) {
  _loop(i);
}