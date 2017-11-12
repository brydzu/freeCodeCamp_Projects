// Credit to Youtube: CodingTutorials360

$(document).ready(function() {
  //When search is clicked, run this function
  $("#search").click(function() {
    //Gets search input
    var searchTerm = $('#searchTerm').val();
    //API url with searchTerm
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";
    // run AJAX to return data in JSON 
    $.ajax({
      type: "GET",
      url: url,
      async: false,
      dataType: "json",
      success: function(data) {
        // prevent output from appending on top of previous output 
        // get heading, link, and description
        $('#output').html('');
        for (var i = 0; i < data[1].length; i++) {
          $('#output').prepend("<div><div class='btn-primary'><a href=" + data[3][i] + "><h2>" + data[1][i] + "</h2>" + "<p>" + data[2][i] + "</p></a></div></div>");
        }
        $("#searchTerm").val('');
      },
      error: function(errorMessage) {
        console.log(errorMessage);
      }
    });
  });
  $("#searchTerm").keypress(function(e) {
    if (e.which == 13) {
      $("#search").click();
    }
  });
});