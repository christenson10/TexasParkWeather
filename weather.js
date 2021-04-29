//Variables for section. Indentify selected location, current temp
var dropL = document.querySelector("#drop-list")

//Variable to fetch weather info
function myFunction() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q={Flint}&appid=api_key=144038776569eb157fc421eeaef8f89e")
    // api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
    
    .then(function(response) {
        return response.json();
    })
    .then(function(response){
        console.log(response);
    })
    }

    myFunction();