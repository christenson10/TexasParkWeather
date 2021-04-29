//Variables for section. Indentify selected location, current temp
var dropL = document.querySelector("#drop-list")

//Variable to fetch weather info
function myFunction() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=Flint&appid=api_key=662a8e54640cc40085727afa832a2eb6")
    .then(function(response) {
        return response.json();
    })
    .then(function(response){
        console.log(response);
    })
    }

    myFunction();

    // // make a get request to url
    // fetch(apiUrl).then(function (response) {
    //   console.log(response);
    //   response.json().then(function (data) {
    //     displayRepos(data, user));
    //   });
    // });

