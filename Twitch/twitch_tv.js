// Credit to Youtube: CodingTutorials360

$(document).ready(function() {
  // FCC Stream LIVE or OFFLINE Status API Call 
  $.ajax({
    type: "GET",
    url: "https://api.twitch.tv/kraken/streams/freecodecamp",
    headers: {
      'Client-ID': 'shhz5p1fvoee6oauh1re8ejudc5wa5'
    },
    // on success, run a function on the receiving data 
    // json assumes you have a success, ajax does not
    success: function(data1) {
      // if they're offline..
      if (data1.stream === null) {
        // ..output offline
        $("#fccStatus").html("Free Code Camp is currently OFFLINE");
      // if they're online.. 
      } else {
        // ..output live 
        $("#fccStatus").html("Free Code Camp is currently LIVE");
      }
    }
  });

  // FCC Display Name of Channels That FCC Follows
  $.ajax({
    type: "GET",
    // channels that FCC follows
    url: "https://api.twitch.tv/kraken/users/freecodecamp/follows/channels/",
    headers: {
      'Client-ID': 'shhz5p1fvoee6oauh1re8ejudc5wa5'
    },
    success: function(data2) {
      for (var i = 0; i < data2.follows.length; i++) {
        console.log(data2.follows[0]);
        //gets displayName
        var displayName = data2.follows[i].channel.display_name;
        var logo = data2.follows[i].channel.logo;
        var status = data2.follows[i].channel.status;
        // if user does not have logo set, output the default no-logo image  
        if (logo === null) {
          logo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeF9yiuuOJBNO8VpXsVp2VQIpBSTPdLKW6uB3AI-jmSX9G74bX1g";
        }
        $("#followerInfo").prepend("<div class ='row'>" + "<div class='col-md-4'>" +
          "<a href='https://www.twitch.tv/" + displayName + "'><img src='" + logo + "'></a>" +
          "</div>" + "<div class='col-md-4'>" + displayName + "</div>" + "<div class='col-md-4'>" + status + "</div></div>");
      }
    }
  });
  
  // FCC Deleted Follower's 
  // check for these two users 
  // which we know does not exist, that's why we will have an error function with)
  var deletedFollowers = ['brunofin', 'comster404'];
  for (var i = 0; i < deletedFollowers.length; i++) {
  $.ajax({
    type: "GET",
    url: "https://api.twitch.tv/kraken/streams/" + deletedFollowers[i],
    headers: {
      'Client-ID': 'shhz5p1fvoee6oauh1re8ejudc5wa5'
    },
    // if error, run this function instead
    // success function not needed because we know it will be an error 
    error: function(data3) {
      // default no-logo image 
      var logo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeF9yiuuOJBNO8VpXsVp2VQIpBSTPdLKW6uB3AI-jmSX9G74bX1g";
      // not found
      var displayName = data3.statusText;
      // 404 
      var status = data3.status;
      $("#followerInfo").prepend("<div class ='row'>" + "<div class='col-md-4'>" +
        "<a  href='https://www.twitch.tv/" + displayName + +"'><img src='" + logo + "'></a>" +
        "</div>" + "<div class='col-md-4'>" + displayName + "</div>" + "<div class='col-md-4'>" + status + "</div></div>");
    }
  });    
  }
});