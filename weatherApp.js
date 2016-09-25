$(function () {
    $("#sendZip").click(function () {
        var area = $("#zipCode").val();



        //   console.log(area);
        //    below adds variable "area" to google and retrieves lat and long
        $.ajax("https://maps.googleapis.com/maps/api/geocode/json?address=" + area + "&key=AIzaSyAt3yHpgvBYw2u5lrWXKisJ9d23ITL3VUQ", { dataType: "json" }).done(function (data) {
            console.log(data);
            var latI = data.results[0].geometry.location.lat;
            var longI = data.results[0].geometry.location.lng;
            var town = data.results[0].formatted_address;
            //   console.log(latI);
            //   console.log(longI);
            //   console.log(town);
            $.ajax("https://api.darksky.net/forecast/71ce746e051ee5b5e05ffb182555ea67/" + latI + "," + longI, { dataType: "jsonp" }).done(function (data) {
                console.log(data);
                var dailySummary = data.currently.summary;
                var currentTemperature = data.currently.temperature;
                var tempHigh = data.daily.data[0].apparentTemperatureMax;
                var tempMin = data.daily.data[0].apparentTemperatureMin;
                var chanceOfRain = data.daily.data[0].precipProbability;
                var displayTemperature = Math.round(currentTemperature);
                var displayTemperatureHigh = Math.round(tempHigh);
                var displayTemperatureMin = Math.round(tempMin);
                console.log(dailySummary);
                console.log(displayTemperature);
                console.log(displayTemperatureHigh);
                console.log(displayTemperatureMin);
                console.log(chanceOfRain);
                //above works to pull information turn to variable and plug into a long set up screen
                $("#sendZip").click(function () {
                    addContent(data);
                })

                var addContent = function (id) {
                    var container = $("#container");
                    var span = $("<span></span>");
               

                    container.append('<span>Hello, World!";
                };


            });

        });
    });

});









