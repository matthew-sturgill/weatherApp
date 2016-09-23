$(function () {
    //Below works for pulling data from dark sky as well as assigning id to pull data to html
    //$.ajax("https://api.darksky.net/forecast/71ce746e051ee5b5e05ffb182555ea67" + "/37.8267,-122.4233", { dataType: "jsonp"}).done(function(data) {
    //   console.log(data);


    // $("#summary").html(data.currently.summary);
    //$("#temperature").html("Temp: " + data.currently.apparentTemperature);



    // });

    //Below calls zip from input to variable "area".
    $("#sendZip").click(function () {
        var area = $("#zipCode").val();
        console.log(area);


        //below adds variable "area" to google and retrieves lat and long
        $.ajax("https://maps.googleapis.com/maps/api/geocode/json?address=" + area + "&key=AIzaSyAt3yHpgvBYw2u5lrWXKisJ9d23ITL3VUQ", { dataType: "json" }).done(function (data) {
            console.log(data);
            var latI = data.results[0].geometry.location.lat;
            var longI = data.results[0].geometry.location.lng;
            console.log(latI);
            console.log(longI);
            
            $.ajax("https://api.darksky.net/forecast/71ce746e051ee5b5e05ffb182555ea67/" + latI + "," + longI, { dataType: "jsonp" }).done(function (data) {
              
            $("#dailySummary").html(data.currently.summary);
            $("#temperature").html(data.currently.temperature);
            $("#temperatureMax").html(data.daily.data[0].apparentTemperatureMax);
            $("#temperatureMin").html(data.daily.data[0].apparentTemperatureMin);
            $("#rainPercent").html(data.daily.data[0].precipProbability);
                //above works to pull information might turn to variable and plug into a long set up screen


            });


        });

  // $("#sendZip").click(function() {
    // var addContent = function() {
  //      var container = $("#container");
//        var span = $("<span></span>");
      //  span.html("temper ");
    //    span.append("World!");
  //      var link = $("<a></a>");
//        link.attr("href", url);
      //  link.attr("target", "_blank");
    //    link.html(" (Google That) ");
  //      span.append(link);
 //       container.append(span);
//
      //  container.append('<span> "Temperature);
  
    });




});











