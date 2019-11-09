$(document).ready(function () {

//defining game variables:

//variables that reference html elements 
var targetCrystal = $("target-crystal");
var yourCrystal = $("user-crystal");
var crystalOne = 0;
var crystalTwo = 0;
var crystalThree = 0;
var crystalFour = 0;
var counter = 0;
var wins = 0;
var losses = 0;



//defining functions 
function getTargetNum(min, max) {
    min = Math.ceil(19);
    max = Math.floor(120);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
    $("target-crystal").html(getTargetNum);
  };

function crystal() {
    min = Math.ceil(1);
    max = Math.floor(12);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
    console.log(crystal);
};   

// begins game 
window.onload = function() {
    $("#c1").on("click", crystal);
    $("#c2").on("click", crystal);
    $("#c3").on("click", crystal);
    $("#c4").on("click", crystal);
    
    if (counter === targetNumber) {
        wins++;
    }
  
      else if (counter >= targetNumber) {
        losses++;
    }

  };    


});