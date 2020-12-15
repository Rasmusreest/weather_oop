class Weather {
    constructor(city) {
        this.city = city;
        this.key = '1fbbb7f9023e148d00df6a5cf216e20d';
    }

    // data from API
    async weatherData() {
        const resp = await fetch(
            'https://api.openweathermap.org/data/2.5/weather?q=Toronto,CA&appid=' +
            this.city +
            "&appid=" +
            this.key
        );
        const data = await resp.json();
        return data;
    }
}
