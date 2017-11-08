// Credit to Youtube: CodingTutorials360

$(document).ready(function() {
  // Variables 
  var buzzer = $("#buzzer")[0];
  var sessionTime = parseInt($("#sessionNum").html());
  var breakTime = parseInt($("#breakNum").html());
  
  // TIMER LOGIC
  $("#start").click(function() {
    // Start Session Cycle
    var counter = setInterval(sessionTimer, 1000);
    sessionTime *= 60;
    $("#start, #minus5Session, #plus5Session, #breakTitle, #minus5Break, #plus5Break, #breakNum, #reset").hide(); 
    // Session Timer
    function sessionTimer() {
      sessionTime -= 1;
      if (sessionTime === 0) {
        buzzer.play();
        clearInterval(counter);
        // Start Break Cycle
        var startBreak = setInterval(breakTimer, 1000);
        breakTime *= 60;
        $("#sessionNum, #sessionTitle").hide();
      }
      // sessionTime Display Format
      if (sessionTime % 60 >= 10){
        $("#sessionNum").html(Math.floor(sessionTime / 60) + ":" + sessionTime % 60);
      } else {
        $("#sessionNum").html(Math.floor(sessionTime / 60) + ":" + "0" + sessionTime % 60);
      }
          
      // Break Timer
      function breakTimer() {
        $("#breakTitle, #breakNum").show();
        breakTime -= 1;
        if (breakTime === 0) {
          buzzer.play();
          clearInterval(startBreak);
          $("#breakTitle, #breakNum").hide();
          $("#reset").show();
        }
        // breakTime Display Format
        if (breakTime % 60 > 10){
          $("#breakNum").html(Math.floor(breakTime / 60) + ":" + breakTime % 60);
        } else {
          $("#breakNum").html(Math.floor(breakTime / 60) + ":" + "0" + breakTime % 60);
        }        
      }
    }  
  });
  // RESET
  $("#reset").click(function(){
    sessionTime = 5;
    breakTime = 5;
    $("#sessionNum").html(sessionTime);
    $("#breakNum").html(breakTime);
    $("#start, #sessionTitle, #minus5Session, #sessionNum, #plus5Session, #breakTitle, #minus5Break, #breakNum, #plus5Break").show();
  });
  // SESSION CONTROL
  $("#minus5Session").click(function() {
    if (sessionTime > 5) {
      sessionTime -= 5;
      $("#sessionNum").html(sessionTime);
      console.log(sessionTime);
    }
  });
  $("#plus5Session").click(function() {
    sessionTime += 5;
    $("#sessionNum").html(sessionTime);
    console.log(sessionTime);
  });
  // BREAK CONTROL
  $("#minus5Break").click(function() {
    if (breakTime > 5) {
      breakTime -= 5;
      $("#breakNum").html(breakTime);
      console.log(breakTime);
    }
  });
  $("#plus5Break").click(function() {
    breakTime += 5;
    $("#breakNum").html(breakTime);
    console.log(breakTime);
  });
});