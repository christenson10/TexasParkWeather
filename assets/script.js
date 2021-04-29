var dropL = document.querySelector("#drop-list");

function myfunction() {
  fetch("https://developer.nps.gov/api/v1/parks?parkCode=Texas&stateCode=Texas&limit=50&start=1&q=Texas&api_key=7XBVh3JlfEvfScseNuuSZfPdln6Rdn8jH5v7fFy7")
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    console.log(response);
  })
}

  myfunction();

