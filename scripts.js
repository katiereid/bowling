//thoughts on how to set up the logic....doesn't work yet

function bowlingGame(user){
    this.user = user;
   //other props of bowling game
};


USER
name
score

BOWLING
- rules
- frames (# of frames)

FRAME
- 2 turns
- frame #
- score per turn
if (user score == Rules.STRIKE && frame.turn == 1) {
 append x to the spot
}


Models
- User
- Game Rules
- Score
var score = 10;

//seperate out controller and view logic

Controller
view.postScore(model.getScore)


View
postScore(num) {
$("#scoreDiv").innerHttml = num


Controller.prototype.startGame = function(){
// logic here to start a game
}

var game = [];

while (game.length < 10) {
   playFrame()
}

var frame = []
function playFrame() {
  while (frame.length < 2) {
  calculateScore()
  }
}

function calculateScore() {
// gets score from user input
var userNum = jqueryMagic
if (userNum == 10 && frame.length == 0) {
strikeLogic()
   // strike logic
frame[0] = 20
} else if (userNum == 10) {
// spare logic
frame[1] = 15
} else {
score[frame.length -1] = userNum
}
}

function Game() {
this.game = []; // [ [20], [1,3], [7, 3] ]
}

Game.proto.playGame() = function() {
// loop that makes sure your game is less then 10 frames
}
Game.proto.playRound() = function() {
// frame things
}

var sampleGame = [[7,3] ]

while (sampleGame.length > 0) {
var turn = sampleGame.shift()
}

//stuff that actually works:


function enterPlayers() {
  $("#name-input-one").change(function() {
    $("#name-input-one").replaceWith($("#name-input-one").val());
  });

  $("#name-input-two").change(function() {
    $("#name-input-two").replaceWith($("#name-input-two").val());
  });

  $("#name-input-three").change(function() {
    $("#name-input-three").replaceWith($("#name-input-three").val());
  });

  $("#name-input-four").change(function() {
    $("#name-input-four").replaceWith($("#name-input-four").val());
  });

  $("#name-input-five").change(function() {
    $("#name-input-five").replaceWith($("#name-input-five").val());
  });

}


$(document).ready(function() {
  enterPlayers();
});
