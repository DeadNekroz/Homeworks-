"use strict";

function checkPolindrom() {
  var isPolindrom = prompt('enter Number plz');
  var number = '';
  var numberReversed = '';
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = isPolindrom[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var ch = _step.value;
      number += ch;
      console.log(number);
      numberReversed = ch + numberReversed;
      console.log(numberReversed);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  alert('your number is a polindrom!');
  alert('nope,its not a polindrom!');
}