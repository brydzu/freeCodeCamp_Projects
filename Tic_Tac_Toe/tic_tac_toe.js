// Credit to Youtube: CodingTutorials360

$(document).ready(function(){
  // **VARIABLES**
  // default the user's turn to X
  var usersChoice = "X";
  // default the computer's turn to O
  var computersChoice = "O";
  // array, storing values to iterate through, checking if conditions are met for a winning score for either player 
  var arrayOfTurns = ["#", "#", "#", "#", "#", "#", "#", "#", "#"];
  // boolean variable to detect if user's turn or computer's turn
  var gameOn = false;
  // keeps track of computers turn so no loop
  var count = 0;
  
  /*
  --------------------------------------------------------------------------------------------------------------
  */
  // **CLICK FUNCTIONS**
   
  // .SPOT
  $(".spot").click(function() {
    // to store the value of the object that you are clicking (this), then take the attribute from the id
    // ids are named to match with index array postion
    var slot = $(this).attr('id');
    abilityToChoose(usersChoice, slot);
  });
  
  // USER CHOOSES X, COMPUTER CHOOSES O
  $("#turnX").click(function(){
    // to prevent changing sides (X or O) during occurring game, game will reset when Turn X button is clicked 
    reset();
    // set the user's turn to X
    usersChoice = "X";
    // set the computer's turn to O
    computersChoice = "O";
    // button classes are added/removed to differentiate
    $("#turnO").addClass("btn-secondary");
    $("#turnX").removeClass("btn-secondary");
  });
  
  // USER CHOOSES O, COMPUTER CHOOSES X
  $("#turnO").click(function(){
    // to prevent changing sides (X or O) during occurring game, game will reset when Turn O button is clicked 
    reset();
    // set the user's turn to O
    usersChoice = "O";
    // set the computer's turn to X
    computersChoice = "X";
    // button classes are added/removed to differentiate
    $("#turnX").addClass("btn-secondary");
    $("#turnO").removeClass("btn-secondary");
  });
  
  /*
  --------------------------------------------------------------------------------------------------------------
  */
  // **LOGIC**
  
  // ABILITY TO CHOOSE
  // check if a spot is already taken - - should not be able to click on a button that already has an input (X or O)
  // usersChoice is what it’s suppose to be (either X or 0), id is where it's suppose to go
  function abilityToChoose(usersChoice, id) {
    // store the value of the id
    var spotTaken = $("#" + id).text();
    // if spot is available, meaning not X or O
    if (spotTaken === "#") {
      // keep count of how many turns have taken place 
      count++;
      // set the value of the button that you are clicking - - that button will become either X or O, depending on whose turn it is
      $("#" + id).text(usersChoice);
      // that spot becomes the turn value - - add that value to the array
      arrayOfTurns[id] = usersChoice;
      // keeps track if anybody won
      // arrayOfTurns = array, checks the position, if the spot belongs to either X or O
      // turn = checks current turn, if the turn is either X or O
      winningConditions(arrayOfTurns, usersChoice);
      // if the spot position is open and the user doesn't win
      if (gameOn === false) {
        // ..it is the computer's turn
        computersTurn();
        // conditions for the computer to win
        // arrayOfTurns = array, checks the position, if the spot belongs to either X or O
        // computersChoice = if the turn is either X or O
        winningConditions(arrayOfTurns, computersChoice);
      }
    }   
  } 
  
  // COMPUTERS TURN
  function computersTurn() {
    // break the while loop, by creating a variable that checks if a spot is taken
    var taken = false;
    while (taken === false && count !== 5) {
      var computersRandomMove = (Math.random() * 10).toFixed();
      var outputToSpot = $("#" + computersRandomMove).text();
      if (outputToSpot === "#") {
        $("#" + computersRandomMove).text(computersChoice);
        taken = true;
        arrayOfTurns[computersRandomMove] = computersChoice;
      }
    }
  }
  
  // WINNING CONDITIONS
  function winningConditions(arrayOfTurns, currentTurn) {
    if (arrayOfTurns[0] === currentTurn && arrayOfTurns[1] === currentTurn && arrayOfTurns[2] === currentTurn) {
      gameOn = true;
      reset();
      alert("Player " + currentTurn + " wins (across spots: 0, 1, 2)");
    } else if (arrayOfTurns[3] === currentTurn && arrayOfTurns[4] === currentTurn && arrayOfTurns[5] === currentTurn) {
      gameOn = true;
      reset();
      alert("Player " + currentTurn + " wins (across spots: 3, 4, 5)");
    } else if (arrayOfTurns[6] === currentTurn && arrayOfTurns[7] === currentTurn && arrayOfTurns[8] === currentTurn) {
      gameOn = true;
      reset();
      alert("Player " + currentTurn + " wins (across spots: 6, 7, 8)");
    } else if (arrayOfTurns[0] === currentTurn && arrayOfTurns[3] === currentTurn && arrayOfTurns[6] === currentTurn) {
      gameOn = true;
      reset();
      alert("Player " + currentTurn + " wins (across spots: 0, 3, 6)");
    } else if (arrayOfTurns[1] === currentTurn && arrayOfTurns[4] === currentTurn && arrayOfTurns[7] === currentTurn) {
      gameOn = true;
      reset();
      alert("Player " + currentTurn + " wins (across spots: 1, 4, 7)");
    } else if (arrayOfTurns[2] === currentTurn && arrayOfTurns[5] === currentTurn && arrayOfTurns[8] === currentTurn) {
      gameOn = true;
      reset();
      alert("Player " + currentTurn + " wins (across spots: 2, 5, 8)");
    } else if (arrayOfTurns[0] === currentTurn && arrayOfTurns[4] === currentTurn && arrayOfTurns[8] === currentTurn) {
      gameOn = true;
      reset();
      alert("Player " + currentTurn + " wins (across spots: 0, 4, 8)");
    } else if (arrayOfTurns[2] === currentTurn && arrayOfTurns[4] === currentTurn && arrayOfTurns[6] === currentTurn) {
      gameOn = true;
      reset();
      alert("Player " + currentTurn + " wins (across spots: 2, 4, 6)");
    } else {
      gameOn = false;
    }
  }
  
  // RESET
  function reset(){
    // resets all turns to default hashtag string 
    arrayOfTurns = ["#", "#", "#", "#", "#", "#", "#", "#", "#"];
    // reset count to zero 
    var count = 0;
    // reset spots to #
    $(".spot").text("#");
    // reset to false, as game can continue, as no one has won or lose
    gameOn = false;
  }
  
});
  