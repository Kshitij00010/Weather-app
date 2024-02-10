let input = document.querySelector("#city");
let search = document.querySelector("#sicon");
let weatherIcon = document.querySelector("#weathericon");
let temp = document.querySelector("#wvalue");
let humidity = document.querySelector("#humid");
let windSpeed = document.querySelector("#wind");
let descript = document.querySelector("#descript");
let info = document.querySelector(".maininfo");
let nodata = document.querySelector("#no-data");

async function check(city) {
  const api_key = "9a59a8f100115a1b6a666e1ea12fe69b";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

  const weather_data = await fetch(`${url}`).then((response) =>
    response.json()
  );
  console.log(weather_data);

  if (weather_data.cod == `404`) {
    nodata.style.display = "block";
    info.style.display = "none";
  } else {
    info.style.display = "block";
    nodata.style.display = "none";

    temp.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;

    descript.innerHTML = `${weather_data.weather[0].description}`;

    humidity.innerHTML = `${weather_data.main.humidity}%`;

    windSpeed.innerHTML = `${weather_data.wind.speed}km/h`;

    switch (weather_data.weather[0].main) {
      case "Clouds":
        weatherIcon.src = "weatherimg/clouds.png";
        break;
      case "Clear":
        weatherIcon.src = "weatherimg/clear.png";
        break;
      case "Rain":
        weatherIcon.src = "weatherimg/rain.png";
        break;
      case "Mist":
        weatherIcon.src = "weatherimg/mist.png";
        break;
      case "Snow":
        weatherIcon.src = "weatherimg/snow.png";
        break;
      case "Drizzle":
        weatherIcon.src = "weatherimg/drizzle.png";
        break;
      case "Smoke":
        weatherIcon.src = "weatherimg/smoke.png";
        break;
    }
  }
}
search.addEventListener("click", () => {
  check(input.value);
});
