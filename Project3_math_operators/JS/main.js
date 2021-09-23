
// function Math.random() {
//     return Math.PI;
//   }
      function Math_Function () {
          var number= Math.random();
        document.getElementById("number").innerHTML = "number";
    }


function subtraction_Function () {
    var subtraction = 8-3;
    document.getElementById("subtraction").innerHTML = "8-3 = " + subtraction;
}

function multiplication_Function () {
    var multiplication = 7 * 3;
    document.getElementById ("multiplication").innerHTML = "7x3= " + multiplication;
}
     
function division_Function () {
    var division = 35 / 7;
    document.getElementById ("division").innerHTML = "35/7= " + division;
}  
 
function more_math () {
    var more_math = (2+2)*9/3-4;
    document.getElementById ("more_math").innerHTML = "2 plus 2, multiplied by 9, divided by 3 and then subtracted by 4 equals "+ more_math;
}

function modulus_operator () {
    var modulus_operator = 31 % 5;
    document.getElementById("modulus_operator").innerHTML = "When you divide 31 by 5 you have a remainder of: " + modulus_operator;
}

function negation_operator () {
    var x = 10;
    document.getElementById("negation_operator").innerHTML = "-x= " + negation_operator;
}

var x = 5;
x++ ;
document.write(x);

var x = 4.20;
x--;
document.write(x);

window.alert (Math.random());
window.alert(Math.random() * 100);

