const search_btn = document.querySelector(".search-btn");
const search_bar = document.querySelector(".search-bar");
const weather_img = document.getElementById("weather_img");
const temperature = document.querySelector(".temperature");
const weather = document.querySelector(".weather");
const temp = document.querySelector(".temp");
const speed_value = document.querySelector(".speed_value");
const row2 = document.querySelector(".row2");
const row3 = document.querySelector(".row3");
const api_key = `fc5ffbc947afbb0e81609de3d59d770c`;
async function search(loc) {
  const api_call = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${api_key}`;
  const data = await fetch(api_call);
  const actual_data = await data.json();
  if (actual_data.cod == "404") {
    row2.innerHTML = `
    <h2 style="margin:10px; color: red;">OOPS! City Not Found...</h2>
    <img src="assets/404.png" alt="City Not Found" height="200px" />
  `;
    row3.style.display = "none";
    return;
  }

  temperature.innerHTML = `${Math.floor(
    actual_data.main.temp - 273
  )} <sup>°C</sup>`;
  weather.innerHTML = `${actual_data.weather[0].description}`;
  temp.innerHTML = `${actual_data.main.humidity} %`;
  speed_value.innerHTML = `${actual_data.wind.speed} KM/H`;

  switch (actual_data.weather[0].main) {
    case "Clear":
      weather_img.src = "assets/clear.png";
      break;

    case "Clouds":
      weather_img.src = "assets/cloud.png";
      break;

    case "Mist":
      weather_img.src = "assets/mist.png";
      break;

    case "Rain":
      weather_img.src = "assets/rain.png";
      break;
    case "Snow":
      weather_img.src = "assets/snow.png";
      break;
  }
}
search_btn.addEventListener("click", () => {
  search(search_bar.value);
});
search_bar.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    search(search_bar.value);
  }
});
