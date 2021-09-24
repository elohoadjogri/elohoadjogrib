function my_Dictionary() {
    var Animal = {
        Species:"Cat",
        Color:"White",
        Breed:"Scottish Fold",
        Age:5,
        Sound:"Meow!"
    };
    delete Animal.Sound;
    document.getElementById("Dictionary").innerHTML = Animal.Sound;   
}
