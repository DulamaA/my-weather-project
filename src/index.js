//feature #1
let now = new Date();

let currentTime = document.querySelector("#currentTime");

let date = now.getDate();
let hour = now.getHours();
let min = now.getMinutes();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

currentTime.innerHTML = `${day} ${date}, ${hour}:${min}`;

//feature #2
function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-enter-city");
  let h1 = document.querySelector("h1");
  h1.innerHTML = searchInput.value;
}
let form = document.querySelector("#entercity");
form.addEventListener("submit", search);

function convertToFahrenheit(event) {
  event.preventDefault();
  let changeTemperature = document.querySelector("#temperature");
  changeTemperature.innerHTML = `64°F`;
}
let temperatureC = document.querySelector("#fahrenheit");
temperatureC.addEventListener("click", convertToFahrenheit);

function convertToCelsius(event) {
  event.preventDefault();
  let changeTemperature = document.querySelector("#temperature");
  changeTemperature.innerHTML = `19°C`;
}
let temperature = document.querySelector("#celsius");
temperature.addEventListener("click", convertToCelsius);

//challenge search engine

function showTemperature(response) {
  document.querySelector("#heading").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML =
    Math.round(response.data.main.temp) + "°C";
}
function searchCity(city) {
  let apiKey = "16e9550d3526f189d453e6d36a97331c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}
function showCity(event) {
  event.preventDefault();
  let city = document.querySelector("#search-enter-city").value;
  searchCity(city);
}

function showPosition(position) {
  let apiKey = "16e9550d3526f189d453e6d36a97331c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}

function getCurrentLocation(event) {
  navigator.geolocation.getCurrentPosition(showPosition);
}

let enterCity = document.querySelector("#entercity");
enterCity.addEventListener("submit", showCity);
let currentButton = document.querySelector("#showPosition");
currentButton.addEventListener("click", getCurrentLocation);
