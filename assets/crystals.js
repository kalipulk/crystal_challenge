let guessValue = Math.floor(Math.random() * 120) + 19;

let currentValue = 0;

let win = 0;
let loss = 0; 

let gem1 = Math.floor(Math.random() * 12) + 1;
console.log(gem1);
    
let gem2 = Math.floor(Math.random() * 12) + 1;
console.log(gem2);
    
let gem3 = Math.floor(Math.random() * 12) + 1;
console.log(gem3);
    
let gem4 = Math.floor(Math.random() * 12) + 1;
console.log(gem4);
    
$(document).ready(function(){
    document.getElementById("valueToGuess").innerHTML = guessValue;
});    
    
const gem1Add = () => {
    document.getElementById("currentValue").innerHTML = currentValue += gem1;
};
const gem2Add = () => {
    document.getElementById("currentValue").innerHTML = currentValue += gem2;
};
const gem3Add = () => {
    document.getElementById("currentValue").innerHTML = currentValue += gem3;
};
const gem4Add = () => {
    document.getElementById("currentValue").innerHTML = currentValue += gem4;
};


window.setInterval(function(){
  if(currentValue === guessValue){
      win += 1;
      $('#wins').text(win);
      console.log(win);
      guessValue = Math.floor(Math.random() * 120) + 19;
      currentValue = 0;
      document.getElementById("valueToGuess").innerHTML = guessValue;
      document.getElementById("currentValue").innerHTML = currentValue;
  } else if(currentValue > guessValue){
      loss += 1;
      $('#losses').text(loss);
      console.log(loss);
      guessValue = Math.floor(Math.random() * 120) + 19;
      currentValue = 0;
      document.getElementById("valueToGuess").innerHTML = guessValue;
      document.getElementById("currentValue").innerHTML = currentValue;
  }
}, 10);



