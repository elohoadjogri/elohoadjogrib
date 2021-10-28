function count_To_Twenty() {
    var Digit ="";
    var x = 10;
    while (x < 21) {
        Digit += "<br>" +x;
        x++;
    }
    document.getElementById("Counting_To_Twenty").innerHTML = Digit;
}

var Instruments = {"Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"};
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments [Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = List_of_Instruments;
}

function dog_pics () {
    var Dog_Picture = [];
    Dog_Picture[0] = "playing";
    Dog_Picture[1] = "barking";
    Dog_Picture[2] = "eating";
    document.getElementById("Dog").innerHTML = "In this picture, the dog is " + Dog_Picture[2] + ".";
}

function constant_function (Vacation_Location) {
    const Vacation_Location = {country: "Egypt", city: "Cairo", month:"March"};
document.getElementById("Constant").innerHTML = "The coolest city in Egypt" + Vacation_Location.country + "Egypt" + city.Cairo;
}

var X = 85;
document.write(X);
{
    let X = 45;
    document.write("<br>" + X);
}
document.write("<br>" + X);

let car = {
    make: "Toyota",
    model: "Lexus",
    year: "2022",
    color: "gold",
    description: function() {
    return "The car is a "+ this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();