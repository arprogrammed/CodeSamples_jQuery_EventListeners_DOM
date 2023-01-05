// Establishes the vars, arrays, and counters/conditions.
const buttonColours = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];
var gamePattern = [];
var level = 0;
var started = false;

// Random function for creating a random number capped at 4.
function random() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    return randomChosenColour;
}

// Function to call the appropriate sound from the passed color param.
function playSound(color) {
    var sound = new Audio("./sounds/" + color + ".mp3");
    sound.play();
}

// Function to breifly add then remove a class to create a flash effect.
function flashButt(color) {
    $("#" + color).addClass("pressed");
    setTimeout(function () {$("#" + color).removeClass("pressed")}, 50);
}

// Function to breifly cause the click to be visual effected.
function clickButt(color) {
    $("#" + color).fadeOut(50).fadeIn(50).fadeOut(50).fadeIn(50);
}

// This is the first game function that causes the game to increment
// up one level and indicated the next color to the user/player.
function nextSequence() {
    userClickedPattern = [];

    level++;
    $("#level-title").text("Level " + level);
    
    var randoColor = random();
    gamePattern.push(randoColor);
    playSound(randoColor);
    flashButt(randoColor);    
}

// This function is the next to check the user/player clicked
// color against the game sequence that has been established
// and respond accordingly.
function checkAnswer(level) {
    if (userClickedPattern[level] === gamePattern[level]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
              }, 1000);
        }
    } else {
        setTimeout(function () {
            playSound("wrong")
            gameOver();
          }, 500);
    }
}

// This function runs when the user responds incorrectly
// it also resets the game for replayability.
function gameOver() {
    $("#level-title").text("Game Over! Press Any Key To Restart");
    $("body").addClass("game-over");
    setTimeout(function () {$("body").removeClass("game-over")}, 50);

    gamePattern = [];
    level = 0;
    started = false;
}

// This event listener is a one-time action to start game
// it toggles the var started to true until game reset.
$(document).keydown(function () {
    if (started == false) {
        nextSequence();
        started = true;
    } else {}    
});

// This event listener will capture a click and pass the
// clicked element's id in to the callback for use in the
// game's checkAnswer function for the game pattern.
$(".btn").click(function () {
    var pColor = $(this).attr("id");
    userClickedPattern.push(pColor);

    playSound(pColor);
    clickButt(pColor);

    checkAnswer(userClickedPattern.length-1);
});