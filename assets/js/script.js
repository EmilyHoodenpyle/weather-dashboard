var city = document.querySelector('search-input');
var APIKey = '8139c3d54584e911194f90d49ebbcf0c';

var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

fetch(queryURL);