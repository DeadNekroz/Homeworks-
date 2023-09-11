function greeting(){
  let greet = prompt("вітаю,  як тебе звати?")
  if(isNaN(greet)&&greet.length()>2){
  let answerGreet= alert(`Привіт,${greet}`);
}
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

function square(){
  let squareSide = parseInt(prompt('введіть сторону квадрата, щоб дізнатись його периметр'));
  if(!isNaN(squareSide)){
  let result = squareSide *4 ;
  
  alert(` периметр квадрата = ${result} см`);
} 
  else{
    alert('введіть, будь ласка, коректну довжину сторони квадрата (в см)')
  };
}
function runnerSpeedCalc(){
  let distance = parseInt(prompt(`яка відстань між містами в км, яку треба подолати?`));
  let time = parseInt(prompt(` скільки часу в тебе буде в годинах?`));
  if(!isNaN(distance)&&!isNaN(time)){
    let result = distance/time;
    alert(`тобі знадобиться бігти зі швидкістю ${result}км за годину`);
  }

}

function binanceStepOne(){
  let dollars = parseInt(prompt(`скільки $ треба обміняти на € `));
  if(!isNaN(dollars)){
    let coeff = 0.93;
    let inEvros = dollars*coeff; 
    alert(`можете обміняти на ${inEvros} €`)
  }
 
}