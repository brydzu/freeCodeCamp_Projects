// Credit to Youtube: CodingTutorials360

$(document).ready(function() {
  // global variables 
  var randomNum;
  var randomQuote;
  var randomAuthor;

  function getQuote() {
    // array of quotes
    var content = [
      "You will die alone and poorly dressed.",
      "Your friends don't really like you.",
      "No one reads your blog.",
      "You have rice in your teeth.",
      "That wasn't chicken.",
      "You will be hungry again in an hour."
    ];
    // array of authors
    var author = [
      "-Confucius",
      "-Laozi",
      "-Mencius",
      "-Xun Kuang",
      "-Sun Tzu",
      "-Wang Yangming"
    ];
    /* math.random method on either array; creates floating
    point so apply Math.floor method to drop to lowest whole integer*/
    randomNum = Math.floor(Math.random() * content.length);
    // content array with random number argument, inside random content variable
    randomQuote = content[randomNum];
    // author array with random number argument, inside random author variable
    randomAuthor = author[randomNum];
    // grab combined text content of randomQuote and insert into quote class
    $(".quote").text(randomQuote);
    // grab combined text content of randomAuthor and insert into author class
    $(".author").text(randomAuthor);
  }

  $("#newQuote").on("click", function() {
    getQuote();
  });

  $("#tweet").on("click", function() {
    window.open(
      "https://twitter.com/intent/tweet?text=" + randomQuote + randomAuthor
    );
  });
});
