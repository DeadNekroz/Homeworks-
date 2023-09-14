"use strict";

// #region easy
function checkAge() {
  while (true) {
    var userAge = parseInt(prompt("Please, enter your age"));

    if (!isNaN(userAge)) {
      switch (true) {
        case 0 < userAge && userAge < 12:
          alert("You are a child!");
          break;

        case 11 < userAge && userAge < 18:
          alert("You are a teenager!");
          break;

        case 17 < userAge && userAge < 60:
          alert("You are an adult!");
          break;

        case 59 < userAge && userAge < 120:
          alert("You are aged!");
          break;

        case userAge > 120:
          alert("u are a vampire, or a turtle, who knows.");
          break;
      }

      break;
    }
  }
}

function alternate_symbol() {
  while (true) {
    var keyboard_number = parseInt(prompt("Please, enter number, to find out its alternate symbol"));

    if (!isNaN(keyboard_number)) {
      switch (keyboard_number) {
        case 1:
          alert("!");
          break;

        case 2:
          alert("@");
          break;

        case 3:
          alert("#");
          break;

        case 4:
          alert("$");
          break;

        case 5:
          alert("%");
          break;

        case 6:
          alert("^");
          break;

        case 7:
          alert("&");
          break;

        case 8:
          alert("*");
          break;

        case 9:
          alert("9");
          break;

        case 0:
          alert(")");
          break;
      }

      break;
    }
  }
}

function lets_get_amount() {
  while (true) {
    var from = parseInt(prompt("plz choose num for starting point"));
    var to = parseInt(prompt("plz choose num for finishing point"));
    var amount = 0;

    if (!isNaN(from) && !isNaN(to)) {
      if (from < to) {
        for (var _i = from; _i <= to; _i++) {
          amount += _i;
        }

        alert("".concat(amount));
      } else if (to < from) {
        for (var _i2 = to; _i2 <= from; _i2++) {
          amount += _i2;
        }

        alert("".concat(amount));
      }
    }

    break;
  }
} // #endregion
// #region normal


function palindromNumber() {
  while (true) {
    var userNumber = prompt("please, enter a 5-digit number you wanna check to");

    if (!isNaN(userNumber) && userNumber.length == 5) {
      var _i3 = userNumber.length - 1;

      var checkNumber = "";

      for (_i3; _i3 >= 0; _i3--) {
        checkNumber += userNumber[_i3];
        console.log(checkNumber);
      }

      checkNumber === userNumber && alert("your number is a palindrom.");
      checkNumber !== userNumber && alert("your number is not a palindrom");
    }
  }
}

function discountCalc() {
  var price = parseInt(prompt("please enter purchase amount"));
  var withDiscount = null;

  switch (true) {
    case 0 < price && price < 200:
      alert("amount is not enough to use discount");
      break;

    case 199 < price && price < 300:
      withDiscount = price - price * 0.03;
      console.log(withDiscount);
      alert("with discount it costs ".concat(withDiscount, " UAH"));
      break;

    case 299 < price && price < 500:
      withDiscount = price - price * 0.05;
      console.log(withDiscount);
      alert("with discount it costs ".concat(withDiscount, " UAH"));
      break;

    case 499 < price:
      withDiscount = price - price * 0.07;
      console.log(withDiscount);
      alert("with discount it costs ".concat(withDiscount, " UAH"));
      break;
  }
}

function oddsEvensNulls() {
  var numbersCounter = 0;
  var evens = 0;
  var odds = 0;
  var nulls = 0;
  var positiveNumbers = 0;
  var negativeNumbers = 0;

  for (i = 0; i <= 10; i++) {
    var someNumber = parseInt(prompt("please enter 10 number one by one "));
    var numberSign = Math.sign(someNumber);

    switch (true) {
      case numberSign === 1:
        positiveNumbers++;
        break;

      case numberSign === -1:
        negativeNumbers++;
        break;
    }

    switch (true) {
      case someNumber === 0 && someNumber != NaN:
        nulls++;
        break;

      case someNumber % 2 === 0 && someNumber !== 0:
        evens++;
        break;

      case someNumber % 2 === 1:
        odds++;
        break;
    }

    numbersCounter++;
    numbersCounter === 10 && alert("amoung your number ive found:".concat(nulls, " nulls,").concat(odds, " odds numbers and ").concat(evens, " even numbers.\n  There are ").concat(positiveNumbers, "positive and ").concat(negativeNumbers, "negative numbers in your list."));
  }
}

function nextDay() {
  for (var _i4 = 0; _i4 <= 6; _i4++) {
    switch (true) {
      case _i4 === 0:
        confirm("today is \"Monday\" wanna see next day of the week?");
        break;

      case _i4 === 1:
        confirm("today is \"Tuesday\" wanna see next day of the week?");
        break;

      case _i4 === 2:
        confirm("today is \"Wednesday\" wanna see next day of the week?");
        break;

      case _i4 === 3:
        confirm("today is \"Thursday\" wanna see next day of the week?");
        break;

      case _i4 === 4:
        confirm("today is \"Friday\" wanna see next day of the week?");
        break;

      case _i4 === 5:
        confirm("today is \"Saturday\" wanna see next day of the week?");
        break;

      case _i4 === 6:
        confirm("today is \"Sunday\" wanna see next day of the week?");
        break;

      case _i4 === 7:
        _i4 - 7; // не мінусує і :с 

        console.log(_i4);
        confirm("today is \"Monday\" wanna see next day of the week?");
        break;
    }
  }
} // #endregion
//