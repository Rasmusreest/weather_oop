class Weather {
    constructor(city) {
        this.city = city;
        this.key = "021259759086656f1609cbf58a2902a7";
    }

    //data from api
    async weatherData() {
        const resp = await fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" +
            this.city +
            "&appid=" +
            this.key
        );
        const data = await resp.json();
        return data;
    }

    //change city
    changeCityName(name) {
        this.city = name;
    }
}
