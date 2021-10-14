var x = 20;
function Add_numbers_1() {
    document.write(30 + x +"<br>");
}
function Add_numbers_2() {
    document.write(x + 100);
}
Add_numbers_1();
Add_numbers_2();


function Add_numbers_1() {
    var x = 20;
    document.write(30 + x +"<br>");
}
function Add_numbers_2() {
    document.write(x + 100);
}
Add_numbers_1();
Add_numbers_2();

function Add_numbers_1() {
    var x =10;
    console.log(25 + x);
}
function Add_numbers_2() {
    console.log(x + 100);
}
Add_numbers_1 ();
Add_numbers_2 ();


function Date_function() {
    // var Time = new Date().getHours();
    // var Reply;
    if (new Date() .getHours () < 14) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

function Date_function() {
    if (new Age () .getmonths () < 12) {
        document.getElementById("Birthday").innerHTML = "When next are you celebrating?";
    }
}


function Age_function() {
    var Age = new Age().getDate();
    var Reply;
// Date = document.getElementById("Date").ariaValueMax;
if(Date >= 10) {
Drive = "You are eligible to drive!";
}
else {
    Drive = "You are not eligible!";
}
document.getElementById("What_is_your_age?").innerHTML = Drive;
}


function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 10 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time > 10 == Time < 16) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}