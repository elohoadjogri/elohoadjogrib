function Ride_Function() {
    var Height, Can_ride;
    Height=document.getElementById("Height"). ariaValueMax;
    Can_ride = (Height<52) ? "You are too short": "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vehicle (Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep","Trial Hawk", 2019,"White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function Vehicle_Function()  {
    document.getElementById("Keywords_and_constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_color + "-colored " + Erik. Vehicle_Model + 
    " manufactured in " +  Erik.Vehicle_Year;
}

function Vehicle (Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep","Trial Hawk", 2019,"White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function Vehicle_Function()  {
    document.getElementById("New_and_This").innerHTML =
    "Erik drives a " + Erik.Vehicle_color + "-colored " + Erik. Vehicle_Model + 
    " manufactured in" +  Erik.Vehicle_Year;
}

// document.getElementById("demo").innerHTML = add();
function Nested_Function() {
  let counter = 0;
  function plus() {counter += 1;}
  plus();  
  return counter; 
}