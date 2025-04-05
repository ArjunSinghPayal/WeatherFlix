const weatherDetails = {
  button: document.querySelector("#weather"),
  location: document.querySelector("#location"),
  actualWeather: document.querySelector("#actualWeather"),
  weatherDescription: document.querySelector("#weatherDescription"),
  windSpeed: document.querySelector("#windSpeed"),
  temperature: document.querySelector("#temperature"),
  feelsLike: document.querySelector("#feelsLike"),
  maxTemp: document.querySelector("#maxTemp"),
  minTemp: document.querySelector("#minTemp"),
  weatherBlock: document.querySelector("#weatherDisplay"),
};
const moviesDisplay = document.querySelector("#MoviesDisplay");
let count = 0;

const weatherAPI = "YOUR_API_KEY_HERE";
const Location = "YOUR_LOCATION_HERE";

const weatherFunc = async () => {
  try {
    const req = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${Location}&APPID=${weatherAPI}&units=metric`
    );
    count += 1;
    const data = await req.json();
    weatherDetails.weatherBlock.classList.remove("d-none");
    weatherDetails.location.textContent = data.name;
    weatherDetails.actualWeather.textContent = data.weather[0].main;
    weatherDetails.weatherDescription.textContent = data.weather[0].description;
    weatherDetails.windSpeed.textContent = data.wind.speed + "meter/sec";
    weatherDetails.temperature.textContent =
      "Current Temp: " + data.main.temp + "°C";
    weatherDetails.feelsLike.textContent =
      "Feels Like: " + data.main.feels_like + "°C";
    weatherDetails.maxTemp.textContent =
      "MaX Temp: " + data.main.temp_max + "°C";
    weatherDetails.minTemp.textContent =
      "Min Temp: " + data.main.temp_min + "°C";
  } catch (e) {
    console.warn("Error Occured", e);
    alert("Error Occured", e);
  }
};

weatherDetails.button.addEventListener("click", async (event) => {
  moviesDisplay.classList.add("d-none");
  if (count === 0) {
    const data = await weatherFunc();
  } else {
    weatherDetails.weatherBlock.classList.toggle("d-none");
  }
});
