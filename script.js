const apiKey = "b4432ff7d04c7eda5f425e3a5d02cd88";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBoxSel = document.querySelector(".inputCity");
const buttonSel = document.querySelector(".button");
const weatherIconSel = document.querySelector(".weather-icon");
const citySel = document.querySelector(".city");
const tempSel = document.querySelector(".temp");
const windSpeedSel = document.querySelector(".wind-speed");
const humiditySel = document.querySelector(".humidity");

async function checkWeather(cityName) {
  console.log("I am in checkWeather function!");
  const response = await fetch(apiUrl + cityName + `&appid=${apiKey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
} else {
    document.querySelector(".error").style.display = "none";
    let data = await response.json();
    citySel.innerHTML = data.name;
    console.log(data);
    tempSel.innerHTML = Math.round(data.main.temp) + `°c`;
    humiditySel.innerHTML = data.main.temp + `%`;
    windSpeedSel.innerHTML = data.wind.speed + `km/h`;

    if (data.weather[0].main == "Clear") weatherIconSel.src = "icons/clear.png";
    else if (data.weather[0].main == "Clouds")
      weatherIconSel.src = "icons/clouds.png";
    else if (data.weather[0].main == "Rain")
      weatherIconSel.src = "icons/rain.png";
    else if (data.weather[0].main == "Mist")
      weatherIconSel.src = "icons/mist.png";
    else if (data.weather[0].main == "Drizzle")
      weatherIconSel.src = "icons/drizzle.png";

    document.querySelector(".weather").style.display = "block";
  }
}

//  checkWeather("germany");
buttonSel.addEventListener('click', () => {
  checkWeather(searchBoxSel.value);
});
searchBoxSel.addEventListener("keydown",(event)=>{
    if(event.key=="Enter")
    checkWeather(searchBoxSel.value);
});
