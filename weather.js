//Variables for section. Indentify selected location, current temp
var dropL = document.querySelector("#searchField")
var cityName = dropL.value

//Change event for city drop down, add event listener to run myFunction
dropL.addEventListener ("change", myFunction(cityName))

//Variable to fetch weather info
function myFunction(cityName) {
    var queryUrl = ("https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=662a8e54640cc40085727afa832a2eb6")
    fetch(queryUrl)
    // api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
    
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        var temp = response.main.temp;
        var weather = response.weather[0].main;

        var currentWeather = document.createElement('p');
        currentWeather.innerText = weather;
        const weatherLocation = document.querySelector(".weatherDiv")
        weatherLocation.appendChild(currentWeather)

        var currentTemp = document.createElement('p');
        currentTemp.innerText = temp;
        const tempLocation = document.querySelector(".tempDiv")
        tempLocation.appendChild(currentTemp)

    })
    }

    myFunction();