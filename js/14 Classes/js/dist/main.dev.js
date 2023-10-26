"use strict";

var _circle;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//  #region КОЛО
var circle = (_circle = {
  setRadius: function setRadius(radius) {
    this.radius = radius;
  },
  p: Math.PI,
  getRadius: function getRadius() {
    console.log(this.radius); // return this.radius;
  }
}, _defineProperty(_circle, "setRadius", function setRadius(radius) {
  return this.radius = radius;
}), _defineProperty(_circle, "getSize", function getSize() {
  console.log(this.p * Math.pow(this.radius, 2));
}), _defineProperty(_circle, "getDiameter", function getDiameter() {
  this.diameter = this.radius * 2;
  console.log(this.diameter);
}), _defineProperty(_circle, "getLength", function getLength() {
  this.length = 2 * this.p * this.radius;
  console.log(this.length);
}), _circle); // #endregion
// #region Marker

var marker = {
  color: 'black',
  amountOfInk: '100%',
  textField: document.querySelector('.textField'),
  SetColor: function SetColor(color) {
    this.color = "\"".concat(color, "\"");
  },
  SetAmountOfInk: function SetAmountOfInk(ink) {
    this.amountOfInk = "\"".concat(ink, "\"");
  },
  SetText: function SetText(str) {
    this.textToWrite = str;
  }
};

function canWrite() {
  var inksLeft = parseInt(this.amountOfInk);
  var noSpaceText = this.textToWrite.replace(/ /g, '');
  console.log(noSpaceText);
  var symbolsCanWrite = noSpaceText.length / 0.5;
  console.log(symbolsCanWrite);
  document.querySelector('.textField').innerHtml = "\n    <p style=\"color:".concat(this.color, "\">").concat(symbolsCanWrite, "</p>");
} // #endregion
// Bank
// #endregion