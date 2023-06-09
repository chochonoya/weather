let API = "http://api.openweathermap.org/data/2.5/weather?q=";
let appID = "&appid=b067377a72c98ae6963cdae2e35408d9";

let input = document.getElementById("input");

async function getWindyByCity(event) {
  event.preventDefault();
  const response = await fetch(API + input.value + appID);
  const weather = await response.json();
  console.log("weather: ", weather);
  const fills_like = Math.floor(weather.main.feels_like - 273.15);
  const temp = Math.floor(weather.main.temp - 273.15);

  let resultBlcok = document.getElementById("resultBlock");

  let fills_likenode = document.createElement("span");
  fills_likenode.innerHTML = `feels like in ${input.value} : ${fills_like}`;
  resultBlcok.appendChild(fills_likenode);

  let tempnode = document.createElement("span");
  tempnode.innerHTML = ` temp ${input.value} : ${temp}`;
  resultBlcok.appendChild(tempnode);
}
