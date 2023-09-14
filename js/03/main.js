// #region easy
function checkAge() {
  while (true) {
    let userAge = parseInt(prompt("Please, enter your age"));

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
    let keyboard_number = parseInt(
      prompt("Please, enter number, to find out its alternate symbol")
    );

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
    let from = parseInt(prompt("plz choose num for starting point"));
    let to = parseInt(prompt("plz choose num for finishing point"));
    let amount = 0;
    if (!isNaN(from) && !isNaN(to)) {
      if (from < to) {
        for (let i = from; i <= to; i++) {
          amount += i;
        }
        alert(`${amount}`);
      } else if (to < from) {
        for (let i = to; i <= from; i++) {
          amount += i;
        }
        alert(`${amount}`);
      }
    }
    break;
  }
}
// #endregion

// #region normal
function palindromNumber() {
  while (true) {
    let userNumber = prompt(
      "please, enter a 5-digit number you wanna check to"
    );
    if (!isNaN(userNumber) && userNumber.length == 5) {
      let i = userNumber.length - 1;
      let checkNumber = "";
      for (i; i >= 0; i--) {
        checkNumber += userNumber[i];
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
      alert(`amount is not enough to use discount`);
      break;
    case 199 < price && price < 300:
      withDiscount = price - price * 0.03;
      console.log(withDiscount);
      alert(`with discount it costs ${withDiscount} UAH`);

      break;

    case 299 < price && price < 500:
      withDiscount = price - price * 0.05;
      console.log(withDiscount);
      alert(`with discount it costs ${withDiscount} UAH`);

      break;

    case 499 < price:
      withDiscount = price - price * 0.07;
      console.log(withDiscount);
      alert(`with discount it costs ${withDiscount} UAH`);

      break;
  }
}

function oddsEvensNulls() {
  let numbersCounter = 0;
  let evens = 0;
  let odds = 0;
  let nulls = 0;
  let positiveNumbers = 0;
  let negativeNumbers = 0;
  for (i = 0; i <= 10; i++) {
    let someNumber = parseInt(prompt("please enter 10 number one by one "));
    let numberSign = Math.sign(someNumber);
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
    numbersCounter === 10 &&
      alert(`amoung your number ive found:${nulls} nulls,${odds} odds numbers and ${evens} even numbers.
  There are ${positiveNumbers}positive and ${negativeNumbers}negative numbers in your list.`);
  }
}

function nextDay() {
  
  for (let i = 0; i <= 6; i++) {
    switch (true) {
      case i===0:
        confirm(
          `today is "Monday" wanna see next day of the week?`
        );
        break;
      case i===1:
        confirm(
          `today is "Tuesday" wanna see next day of the week?`)
        break;
      case i===2:
        confirm(
          `today is "Wednesday" wanna see next day of the week?`)
        break;
      case i===3:
        confirm(
          `today is "Thursday" wanna see next day of the week?`);
        break;
      case i===4:
        confirm(
          `today is "Friday" wanna see next day of the week?`)
        break;
      case i===5:
        confirm(
          `today is "Saturday" wanna see next day of the week?`)
        break;
      case i===6:
        confirm(
          `today is "Sunday" wanna see next day of the week?`)
        break;
        case i===7:
          i-7;
          // не мінусує і :с 
          console.log(i)
          confirm(
            `today is "Monday" wanna see next day of the week?`
          );
          
          break
         
    }
    
    
  }
}

// #endregion

//
