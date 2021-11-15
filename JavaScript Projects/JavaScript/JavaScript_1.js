function vehicle_Function() {
    var vehicle_Output;
    var vehicle = document.getElementById("vehicle_Input").value;
    var vehicle_String = " is an exotic vehicle!";
    switch(vehicle) {
        case "Benz":
            vehicle_Output = "Benz" + vehicle_String;
            break;
        case "BMW":
            vehicle_Output = "BMW" + vehicle_String;
            break;
        case "Porsche":
            vehicle_Output = "Porsche" + vehicle_String;
            break;
        case "Tesla":
            vehicle_Output = "Tesla" + vehicle_String;
            break;
        case "Infiniti":
            vehicle_Output = "Infiniti" + vehicle_String;
            break;
        case "Honda":
            vehicle_Output = "Honda" + vehicle_String;
            break;
        case "Toyota":
            vehicle_Output = "Toyota" + vehicle_String;
            break;
            default:
                vehicle_Output = "Please enter a vehicle exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = vehicle_Output;
}

function Hello_world_Function() {
    var A = document.getElementsByClassName("click");
    A[0].innerHTML = "The phase is really beautiful!";
}

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(20, 20, 150, 100);



