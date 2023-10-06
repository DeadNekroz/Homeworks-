const actionsConfig ={
add:function(){
  console.log('Add to cart');
},
remove:function(){
  console.log('Remove from cart');
},
clear: function(){
  console.log('Clear cart');
}
}



function buttonAction(event){
  const functionKey = event.target.dataset.action;
  console.log(functionKey);
  actionsConfig[functionKey]();

}
document.getElementById('add').addEventListener('click', buttonAction);
document.getElementById('remove').addEventListener('click', buttonAction);
document.getElementById('clear').addEventListener('click', buttonAction);