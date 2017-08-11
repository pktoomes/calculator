window.onload = function(){
const text  = document.getElementById('result');
var elem = document.getElementsByClassName('num');
console.log(elem);
var output = "";
for(let i=0; i<elem.length; i++){
  elem[i].addEventListener("click", function(){
    let num = elem[i].value;
    output = text.innerHTML += num;
  },false);
}
var classZero = document.getElementById('zero');
classZero.addEventListener("click", function(){
  let zero = classZero.value;
  console.log(text.innerHTML);
})
}
