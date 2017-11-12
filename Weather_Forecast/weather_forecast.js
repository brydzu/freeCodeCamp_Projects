// Credit to Youtube: CodingTutorials360

$(document).ready(function() {
  var locationScreen = "";
  var longitude = "";
  var latitude = ""; 
  var api = "https://api.apixu.com/v1/current.json?key=5927db6cc4ef487abcf60623171007&q=auto:ip";
  // Geolocation and Weather Data
  $.getJSON(api, function(data) {
    // for each item in data, run a function
    $.each(data, function() {
      // Assign JSON data to variables
      locationScreen = data.location.name;
      longitude = data.location.lon;
      latitude = data.location.lat;
      var country = data.location.country;
      var windSpeed = data.wind_mph; 
      var celsius = (data.current.temp_c).toFixed(1);
      var fahrenheit = (data.current.temp_f).toFixed(1);
      var details = data.current.condition.text;
      var icon = data.current.condition.icon;
      var wind = data.current.wind_mph;
      var decide = true;
      
      // Target HTML With jQuery To Change Values With API Data
      $("#description").html('<img src=' + icon + '>' + details);
      $("#temp").html(celsius + " &#8451;");
      $("#city").html(locationScreen + ',' + country);
      $("#wind").html(wind + " mph");
      
      // Display Toggle Between Celsius and Fahrenheit
      $("#temp").click(function() {
        if (decide == false) {
          $("#temp").html(fahrenheit + " &#8457;");
          decide = true;
        } else {
          $("#temp").html(celsius + " &#8451;");
          decide = false;
        }
      })
    }); 
  });
});