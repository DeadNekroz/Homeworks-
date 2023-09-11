function greeting(){
  let greet = prompt("вітаю,  як тебе звати?")
  let answerGreet= alert(`Привіт,${greet}`);
}

function birthYear() {
  var currentYear = 2023;
  // new Date('2023-09-11T14:50:00')
  var wasBorned = parseInt(prompt('введіть, будь ласка, ваш рік народження.'));
  if(!isNaN(wasBorned)&& currentYear > wasBorned){
    var userAge = currentYear-wasBorned;
    alert(`ваш вік ${userAge} рочків, але пам'ятай, що після 20 всім 100 років`)
  }     
 
}
function runnerSpeedCalc(){
  let distance = parseInt(prompt(`пиши відстань між містами в км`));
  let time = parseInt(prompt(`пиши скільки часу в тебе буде в годинах`));
  let result = distance/time;
  alert(`тобі знадобиться бігти ${result}км за годину`);
}

function binanceStepOne(){
  let dollars = parseInt(prompt(`пиши скільки $ треба обміняти на € `));
  let coeff = 0.93;
  let inEvros = dollars*coeff; 
  alert(`можете обміняти на ${inEvros} €`)
}