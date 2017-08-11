window.onload = function(){
const text  = document.getElementById('result');
var elem = document.getElementsByClassName('num');
console.log(elem);
var output = "";
//number
for(let i=0; i<elem.length; i++){
  elem[i].addEventListener("click", function(){
    let num = elem[i].value;
    output = text.innerHTML += num;
  },false);
}
//zero
var classZero = document.getElementById('zero');
classZero.addEventListener("click", function(){
  let zero = classZero.value;
  if(text.innerHTML === " "){
    output = text.innerHTML = zero;
  }
  else{
    output = text.innerHTML += zero;
  }
}, false);
//clear
var clear = document.getElementById("clear");
clear.addEventListener("click", function(){
  output = text.innerHTML = " ";
}, false);
//operator
var operatorClass = document.getElementsByClassName("operator");
for(let i=0; i<operatorClass.length; i++){
operatorClass[i].addEventListener("click", function(){
  let operator = operatorClass[i].value;
  if(text.innerHTML === " "){
    output = text.innerHTML;
  }
  else{
    output = text.innerHTML += operator;
  }
}, false);
}
//period
var periodId = document.getElementById("period");
periodId.addEventListener("click", function(){
  let period = periodId.value;
  if(text.innerHTML === " "){
    output = text.innerHTML = "0.";
  }
  else if(text.innerHTML === output){
    output = text.innerHTML += period;
  }
}, false);
//equal
var equalId = document.getElementById("equal");
equalId.addEventListener("click", function(){
  if(text.innerHTML ===" "){
    output = text.innerHTML;
  }
  else {
    text.innerHTML = eval(text.innerHTML);
  }
},false);
}
