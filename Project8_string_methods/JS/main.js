function full_sentence() {
    var part_1 = "I have";
    var part_2 = " made this";
    var part_3 = " into a complete";
    var part_4 = " sentence.";
    var whole_sentence = part_1 .concat(part_2, part_3, part_4);
    document.getElementById("concatenate").innerHTML = whole_sentence;
}


function slice_method () {
    var sentence = "All work and no play makes Eloho a dull boy.";
    var section = sentence.slice(27,33);
    document.getElementById("slice").innerHTML = section;
}

function myFunction() {
    var str = "Hello World!";
    var res = str.toUpperCase();
    document.getElementById("demo").innerHTML = res;
  }

  let str = "Visit W3Schools!"; 
document.getElementById("demo").innerHTML = str.search("W3Schools");

function string_method() {
    var x =2000;
    document.getElementById("Numbers_to_string").innerHTML = x.toString ();
}

function precision_method() {
    var x = 12938.3012987376112;
    document.getElementById("precision").innerHTML = x.toPrecision (10);
}

let num = 4.45678;
let n = num.toFixed(2);
document.getElementById("demo").innerHTML = n;

let str = "Hello World!";
document.getElementById("demo").innerHTML = str.valueOf();