let API = "http://api.openweathermap.org/data/2.5/weather?q=";
let appID = "&appid=b067377a72c98ae6963cdae2e35408d9";

let input = document.getElementById("input");

async function getWeatherByCity(event) {
  event.preventDefault();
  const response = await fetch(API + input.value + appID);
  const weather = await response.json();
  console.log("weather: ", weather);
  const feels_like = Math.floor(weather.main.feels_like - 273.15);

  let resultBlock = document.getElementById("resultBlock");
  resultBlock.style.height = "auto";
  resultBlock.innerHTML = "";

  let feels_likeNode = document.createElement("span");
  feels_likeNode.innerHTML = `Feels like in ${input.value}: ${feels_like}`;
  resultBlock.appendChild(feels_likeNode);

  let tempNode = document.createElement("span");
  tempNode.innerHTML = `Temperature in ${input.value}: ${feels_like}`;
  resultBlock.appendChild(tempNode);

  let countryNode = document.createElement("span");
  countryNode.innerHTML = `Country: ${weather.sys.country}`;
  resultBlock.appendChild(countryNode);
}

function clearInput() {
  input.value = "";
}
