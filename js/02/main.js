function firstBtnAdd() {
  let a = Number(prompt("please give me some float number"));
  let b = Number(prompt("please give me another one to add"));
  if (a < 1 && a > 0 && b < 1 && b > 0) {
    let result = a + b;
    if (result <= 0.31) {
      console.log(result.toPrecision(1));
      alert(result.toPrecision(1));
    } else {
      console.log(result);
      alert(result);
    }
  } else {
    alert(`try again, but with Floats 0-1`);
  }
}

function secondBtnAdd() {
  let a = "2";
  let b = 1;
  let result = Number(a) + b;
  console.log(result);
  alert(`${result},  let a = "2"
  let b = 1;
  let result = Number(a)+b;
   `);
}

function thirdBtnFlashSize() {
  let input = prompt("Please, enter your flash memory size in gb");
  let memory = parseInt(input);
  checkInput = isNaN(input);
  let mbSize = memory * 1000;
  let howManyFiles = Math.round(mbSize / 820);
  console.log(memory);
  if (isNaN(input)) {
    alert("Please, check your input");
  } else {
    alert(`You can save ${howManyFiles} files on this flash`);
  }
}

function howManyChocolatesYouCanBuy() {

  while (true) {
    var money = parseInt(prompt("what  are you counting on(in UAH)?"));
    if (isNaN(money) === false) {
        
      break;
      
    }
    alert("Please, check amount");
  }
  while (true) {
    var price = parseInt(prompt(" enter the cost of the chocolate bar here"));

    if (isNaN(price) === false) {
      
      break;
    }
    alert("Please, enter correct price");
  }
  console.log(money);
  console.log(price);
  let rest = money % price;
  let deal = Math.round(money / price);

  if (money < price) {
    alert("You can't buy chocolate now, go and earn some money");
  } else if (money > price) {
    let chocoCount = `So you can buy ${deal} chocolates, and you still have ${rest} UAH `;
    deal--;
    alert(chocoCount);
  }
}
function fourtBtnReverseNumber(){
  let reversedNumber='';
  let number = parseInt(prompt("write number to reverse it "));
  console.log(number);
  var firstNumb=((number)%10);
  console.log(firstNumb)
  if(firstNumb>5&&secondNumb!=0){
  }
  var secondNumb=Math.floor(((number)%100)/10) ;
  if(secondNumb===0){
    secondNumb=Math.floor((number)%10/10);
    thirdNumb= Math.floor(((number)%1000));
  }
  console.log(secondNumb) 
  var thirdNumb=Math.floor(((number)%1000)/100);
  if(thirdNumb>5&&secondNumb!=0){
  } 
  console.log(thirdNumb)
  reversedNumber=`${firstNumb}${secondNumb}${thirdNumb}`;
  alert(reversedNumber)
}

function fifthBtnDepositCalc(){
  var amount = parseInt(prompt('write your deposit amount here '));
  console.log(amount)
  var interestRate = 5;
  console.log(interestRate);
  var period = parseInt(prompt('please write period (in month)to calc profit'))

 
 
  for (let i=1; i<=period ; i++){
  var afterMonthProfit = ((amount/100)*interestRate)/12 ;
   amount+=afterMonthProfit;
  
  console.log(afterMonthProfit)
 
  }
  console.log(amount)
  return alert(`you will gain ${amount} деняк`)
  
}