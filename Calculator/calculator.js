// Credit to Youtube: CodingTutorials360

$(document).ready(function() {
  // store inputs from user for calculation
  var inputs = [""];
  // string to store current input string
  var totalString;
  // operators array for validation without decimal
  var operators1 = ["+", "-", "/", "*"];
  // operators array for validation with decimal
  var operators2 = ["."];
  // number array for validation 
  var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  
  function getValue(input) {
    // prevent duplicate decimals
    if (operators2.includes(inputs[inputs.length - 1]) === true && input === ".") {
      console.log("Duplicate '.'");
    }
    // prevent starting with an operator by checking if it’s a number
    else if (inputs.length === 1 && operators1.includes(input) === false) {
      inputs.push(input);
    }
    // prevent duplicate operator 
    else if (operators1.includes(inputs[inputs.length - 1]) === false) {
      inputs.push(input);
    // check to add a number   
    } else if (nums.includes(Number(input))) {
      inputs.push(input);
    }
    update();
  }

  // update to the most current value on screen
  function update() {
    totalString = inputs.join("");
    $("#steps").html(totalString);
    console.log(inputs);
  }
  
  // evaluate to get the total 
  function getTotal() {
    totalString = inputs.join("");
    $("#steps").html(eval(totalString));
  }
  
  // when a button is clicked 
  $("a").on("click", function() {
    // if AC is clicked, reset inputs array to default value 
    if (this.id === "deleteAll") {
      inputs = [""];
      update();
    // else if CE is clicked, pop off the last array value  
    } else if (this.id === "backOne") {
      inputs.pop();
      update();
    // else if = is clicked, run getTotal function
    } else if (this.id === "total") {
      getTotal();
    // if the last input is not an operator, run the getValue(); 
    } else {
      if (inputs[inputs.length - 1].indexOf("+", "-", "/", "*", ".") === -1) {
        getValue(this.id);
      } else {
        getValue(this.id);
      }
    }
  });
});