function spam(){
  const a = parseInt(prompt('введіть число'));
  if(!isNaN(a)){
    return false
  }
  spam()
}