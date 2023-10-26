//  #region КОЛО
 const circle = {
  setRadius:function(radius){
    this.radius=radius
  },
  p:Math.PI,
  getRadius: function(){
    console.log(this.radius)
      // return this.radius;

  },

  setRadius: function (radius){
    return  this.radius = radius;
       
  },
  getSize:function(){

    console.log(this.p*(this.radius**2))
  },
  getDiameter: function(){
    this.diameter= this.radius*2
    console.log(this.diameter)
  },
  getLength: function(){
    this.length = 2*this.p*this.radius
    console.log(this.length)
  }

 }
// #endregion

// #region Marker

const marker = {
  color:'black',
  amountOfInk:'100%',
  textField:document.querySelector('.textField'),
  SetColor: function(color){
    this.color=`"${color}"`;
  },
  SetAmountOfInk: function(ink){
    this.amountOfInk=`"${ink}"`
  },
  SetText: function(str){
    this.textToWrite = str
  },
  
  } 
  function canWrite(){ 
    let inksLeft = parseInt(this.amountOfInk);
    let noSpaceText= this.textToWrite.replace(/ /g,'');
    console.log(noSpaceText);
    let symbolsCanWrite =noSpaceText.length/0.5;
    console.log(symbolsCanWrite);
    document.querySelector('.textField').innerHtml =`
    <p style="color:${this.color}">${symbolsCanWrite}</p>`
  }
 
      
  
 
 
// #endregion

// Bank

// #endregion