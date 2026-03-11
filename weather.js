const apiKey = "b70268fad8890f435e2dc8585fd889fa";

function getWeather(){

const city = document.getElementById("cityInput").value;

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

fetch(url)
.then(response => response.json())
.then(data => {

const temp = data.main.temp;
const description = data.weather[0].description;
const icon = data.weather[0].icon;

const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

document.getElementById("weatherResult").innerHTML = `
<h2>${city}</h2>
<img src="${iconUrl}">
<p>${description}</p>
<p><strong>${temp}°C</strong></p>
`;

});

}