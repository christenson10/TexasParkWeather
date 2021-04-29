//Variables for section. Indentify selected location, current temp
var dropL = document.querySelector("#drop-list")

//Variable to fetch weather info
function myFunction() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=Detroit&appid=662a8e54640cc40085727afa832a2eb6")
    // api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
    
    .then(function(response) {
        return response.json();
    })
    .then(function(response){
        console.log(response);
    })
    }

    myFunction();