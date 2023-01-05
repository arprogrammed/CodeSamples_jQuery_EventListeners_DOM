// Selects the drum count through length.
var drumCount = document.querySelectorAll(".drum").length;

// Iterates over each drum adding an event listener
// assigned the key var and animates/sounds the selection onclick.
for (i=0; i<drumCount; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var key = this.innerHTML;
        soundOff(key)
        buttAnim(key)
    });
}

// Takes the key pressed and animates/sounds off.
document.addEventListener("keydown", function (event) {
    var key = event.key;
    soundOff(key)
    buttAnim(key)
});

// Soundoff function will take the key inputed and use a logic
// switch to play the corresponding sound file.
function soundOff(key) {

    switch (key) {
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        
        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        
        case "j":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;
    
        default: console.log(key)
            break;
    }

}

// Buttanim function that animates the selection shake.
function buttAnim(key) {
    var currButt = document.querySelector("." + key);
    currButt.classList.add("pressed");

    setTimeout(function () {currButt.classList.remove("pressed");}, 100);
}