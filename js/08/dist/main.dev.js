"use strict";

var actionsConfig = {
  add: function add() {
    console.log('Add to cart');
  },
  remove: function remove() {
    console.log('Remove from cart');
  },
  clear: function clear() {
    console.log('Clear cart');
  }
};

function buttonAction(event) {
  var functionKey = event.target.dataset.action;
  console.log(functionKey);
  actionsConfig[functionKey]();
}

document.getElementById('add').addEventListener('click', buttonAction);
document.getElementById('remove').addEventListener('click', buttonAction);
document.getElementById('clear').addEventListener('click', buttonAction);