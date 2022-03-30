var city = document.querySelector('search-input');
var APIKey = '8139c3d54584e911194f90d49ebbcf0c';
var searchFormEl = document.querySelector('search-form')



function searchApi(city) {
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

    console.log(queryURL)

    fetch(queryURL)
        .then(function(response) {
            if(!response.ok) {
                throw response.json();
            }
            return response.json();
        })
        .then(function (locRes) {

        });
}

function printResults(resultObj) {
    console.log(resultObj);
    var resultCard = document.createElement('div');
    resultCard.className.add('card');

    var resultBody = document.createElement('div');
    resultBody.className.add('card-body');
    resultCard.append(resultBody);

    
}