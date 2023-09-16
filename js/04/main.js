function ifPurfectNumber(number){

  let totalDivider= 0;
    // 6     1 2 3 
  for(let i=1;i<=number/2;i++){
    if(number%i===0){
      totalDivider=totalDivider+i
      // console.log(totalDivider)
    }
  }
    
    return number===totalDivider

}
function showResult(){
  let userNumber=parseInt(prompt('введіть будь ласка число'));
  console.log(ifPurfectNumber(userNumber)? 'number is purfect' :'number is not purfect')

}

function purfectInRange(){
  let min = parseInt(prompt('введіть мінімальне значення діапазону'))
  let max = parseInt(prompt('введіть максимальне значення діапазону'))
  let result ='';
  for(let i=min; i<=max;i++){
    if(ifPurfectNumber(i)){
      result+=i+ ' ';
    }

  } alert(`${result} are purfect`)
}