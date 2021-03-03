// start game

$(document).keypress(function() {
  if (event.key === "a") {
    $("body").removeClass("game-over")
    $("#level-title").html("Simon GAME!")
    moves = []
    i = 0
    gameLights()
  }
})

// handle click

$(".btn").click(function() {
  color = this.id
  buttonNumClick = parseInt(this.classList[2])
  pressed(color)
  sounds(color)
  gameWinLose()
})

// game win or lose

function gameWinLose() {

  if (checkIfClickTrue(moves, buttonNumClick) === true) {
    if (i === moves.length) {
      i = 0
      setTimeout(function() {
        repeat()
      }, 1000)
      setTimeout(function() {
        gameLights()
      }, 1000 + (500 * moves.length))
    }

  } else {
    new Audio("sounds/wrong.mp3").play()
    $("body").addClass("game-over")
    $("#level-title").html("GAME OVER <br> <br> your finished in level " + moves.length + "!")
  }
}

// game lights

function gameLights() {
  randomNum = Math.floor((Math.random() * 4) + 1);
  pressed(randomNum)
  moves.push(randomNum)
  sounds(randomNum)
}

// button press animation

function pressed(buttonUsed) {

  $("." + buttonUsed).addClass("pressed")

  setTimeout(function() {
    $("." + buttonUsed).removeClass("pressed")
  }, 100)
}

// check if array is equal

function checkIfClickTrue(a, b) {
  if (a[i] === b) {
    check = true
    i++
  } else {
    check = false
  }
  return check
}

// sounds

function sounds(soundByClick) {
  switch (soundByClick) {

    case 4:
    case "blue":
      blue = new Audio("sounds/blue.mp3")
      blue.play()
      break;

    case 2:
    case "red":
      red = new Audio("sounds/red.mp3")
      red.play()
      break;

    case 1:
    case "green":
      green = new Audio("sounds/green.mp3")
      green.play()
      break;

    case 3:
    case "yellow":
      yellow = new Audio("sounds/yellow.mp3")
      yellow.play()
      break;
    default:

  }
}

// repeat

function timedAlert(msg, timing) {
  setTimeout(function() {
    pressed(moves[msg])
    sounds(moves[msg]);
  }, timing);
}

function repeat() {
  for (var i = 0; i <= moves.length - 1; i++) {
    var msg = i,
      timing = i * 500;
    timedAlert(msg, timing);
  };
}
