// api key:335b17afd47efa48d90a3f26fa72ed2c name:Default
//url "api.openweathermap.org/data/2.5/weather"


$(document).ready(function(){

    $("#search_btn").click(function(){
        var city = $("#city").val();
      console.log(city)
      $(".intro").css("display", "none")
        $("#error").empty();
        if(city != ""){
            $.ajax({
                url: "http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid=335b17afd47efa48d90a3f26fa72ed2c",
                type: "GET",
                error: function() {
                    $("#error").text("City not found")},
                success: function(data){
                    console.log(data)
                    // var weather icon
                       let weatherIcon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
                        $('#weather__icon').attr("src", weatherIcon);

                    $("#current_day").empty();
                    $("#current_date").empty();
                    $("#city_name").empty();
                    $("#temperature").empty();
                    $("#wind_speed").empty();
                    $("#wind").empty();
                    $("#sunrise").empty();
                    $("#sunset").empty();
                    $("#city_name").append(data.name);
                    var roundNum = Math.round(data.main.temp);
                    $("#temperature").append( roundNum + "&deg;");


                    var sunrise = data.sys.sunrise;
                    var sunset = data.sys.sunset;

                    // sunrise and sunset
                    var sunDate = new Date(sunrise * 1000);
                    var hours = sunDate.getHours();
                    var minutes = sunDate.getMinutes();
                    var formaTime = hours + ":" + minutes;
                    $("#sunrise").append("<b>Sunrise: </b>" + formaTime)

                    var sunsetDate = new Date(sunset * 1000);
                    var hoursSunset = sunsetDate.getHours();
                    var minutesSunset = sunsetDate.getMinutes();
                    var formaTime2 = hoursSunset + ":" + minutesSunset;
                    $("#sunset").append("<b>Sunset: </b>" + formaTime2)

                    // color temperature
                    if(data.main.temp <= 60 && data.main.temp >= 30){
                        $("body").css("backgroundColor", "#f73222");

                    }else if(data.main.temp <= 30 && data.main.temp >= 20){
                        $("body").css("backgroundColor", "#ff6100");

                    }else if(data.main.temp <= 20 && data.main.temp >= 10){
                        $("body").css("backgroundColor", "#00be0e");

                    }else if(data.main.temp <= 10 && data.main.temp >= 0){
                        $("body").css("backgroundColor", "#0068be");

                    } else if(data.main.temp <= 0 && data.main.temp >= -60){
                        $("body").css("backgroundColor", "#afb4b9 ");

                    }else{

                    }
                    $("#wind_speed").append("<b>Wind: </b>" + data.wind.speed + "m/h");
                    // wind speed icons
                    if(data.wind.speed <= 107 && data.wind.speed >= 80){
                        $("#wind").attr("src","https://img.icons8.com/ios/50/000000/wind-speed-103-107.png")
                    } else if(data.wind.speed <= 79 && data.wind.speed >= 59){
                        $("#wind").attr("src","https://img.icons8.com/ios/50/000000/wind-speed-43-47.png")
                    }else if(data.wind.speed <= 58 && data.wind.speed >= 38){
                        $("#wind").attr("src","https://img.icons8.com/ios/50/000000/wind-speed-38-42.png")
                    }else if(data.wind.speed <= 37 && data.wind.speed >= 33){
                        $("#wind").attr("src","https://img.icons8.com/ios/50/000000/wind-speed-33-37.png")
                    }else if(data.wind.speed <= 32 && data.wind.speed >= 21){
                        $("#wind").attr("src","https://img.icons8.com/ios/50/000000/wind-speed-28-32.png")
                    }else if(data.wind.speed <= 20 && data.wind.speed >= 11){
                        $("#wind").attr("src","https://img.icons8.com/ios/50/000000/wind-speed-23-27.png")
                    }else if(data.wind.speed <= 10 && data.wind.speed >= 9){
                        $("#wind").attr("src","https://img.icons8.com/ios/50/000000/wind-speed-18-22.png")
                    }else if(data.wind.speed <= 8 && data.wind.speed >= 5.6){
                        $("#wind").attr("src","https://img.icons8.com/ios/50/000000/wind-speed-13-17.png")
                    }else if(data.wind.speed <= 5.5 && data.wind.speed >= 2.6){
                        $("#wind").attr("src","https://img.icons8.com/ios/50/000000/wind-speed-3-7.png")
                    }else if(data.wind.speed <= 2.5 && data.wind.speed >= 0){
                        $("#wind").attr("src","https://img.icons8.com/ios/50/000000/wind-speed-1-2.png")
                    }else{

                    }

                    // weekday
                    var day = new Date();
                    var dayWeek  = day.getDay();
                    var weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                    $("#current_day").append(weekDay[dayWeek]+ "  &nbsp; ");

                    // day and month
                    var todayDay = day.getDate();
                    var month = day.getMonth();
                    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]
                    $("#current_date").append("  —  " + "&nbsp;" + todayDay+ " " + months[month]);
                }
            });
        }else{
            $("#error").html("Field is empty")
        }
    })

})

