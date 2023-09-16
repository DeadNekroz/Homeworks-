function checkPolindrom(){
  let isPolindrom = prompt('enter Number plz');
  let number = '';
  let numberReversed='';
 for(let ch of isPolindrom){
  number += ch;
  console.log(number)
  numberReversed = ch+ numberReversed
  console.log(numberReversed)
 }
 
  alert('your number is a polindrom!')
  alert('nope,its not a polindrom!')
 } 
 

 