const buttonColours = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];
var gamePattern = [];
var level = 0;
var started = false;

function random() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    return randomChosenColour;
}

function playSound(color) {
    var sound = new Audio("./sounds/" + color + ".mp3");
    sound.play();
}

function flashButt(color) {
    $("#" + color).addClass("pressed");
    setTimeout(function () {$("#" + color).removeClass("pressed")}, 50);
}

function clickButt(color) {
    $("#" + color).fadeOut(50).fadeIn(50).fadeOut(50).fadeIn(50);
}

function nextSequence() {
    userClickedPattern = [];

    level++;
    $("#level-title").text("Level " + level);
    
    var randoColor = random();
    gamePattern.push(randoColor);
    playSound(randoColor);
    flashButt(randoColor);    
}

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

function gameOver() {
    $("#level-title").text("Game Over! Press Any Key To Restart");
    $("body").addClass("game-over");
    setTimeout(function () {$("body").removeClass("game-over")}, 50);

    gamePattern = [];
    level = 0;
    started = false;
}

$(document).keydown(function () {
    if (started == false) {
        nextSequence();
        started = true;
    } else {}    
});

$(".btn").click(function () {
    var pColor = $(this).attr("id");
    userClickedPattern.push(pColor);

    playSound(pColor);
    clickButt(pColor);

    checkAnswer(userClickedPattern.length-1);
});