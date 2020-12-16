class UI {
    constructor() {
        this.cityName = document.querySelector("#w-city");
        this.temp = document.querySelector("#w-temp");
        this.desc = document.querySelector("#w-desc");
        this.humidity = document.querySelector("#w-hum");
    }

    print(cityWeather) {
        this.cityName.textContent = cityWeather.name;
        const celcius = Math.round(parseFloat(cityWeather.main.temp) - 273.15);
        this.temp.innerHTML = "Temperature: " + `${celcius} &deg;C`;
        this.desc.textContent = "Weather: " + cityWeather.weather[0].description;
        this.humidity.innerHTML = "Humidity: " + cityWeather.main.humidity + "%";
    }
}