import './WeatherInfo5Days.css';

function WeatherInfo5Days ({ weather5Days }) {
    let dailyForecast = {}

    for(let forecast of weather5Days.data.list) {
        const date = new Date(forecast.dt * 1000).toLocaleDateString();

        if(!dailyForecast[date]) {
            dailyForecast[date] = [];
        }

        dailyForecast[date].push(forecast);
    }

    // Obtendo as previsões dos próximos 5 dias
    const next5DaysForecast = Object.entries(dailyForecast).slice(1, 6).map(([date, forecasts]) => {
        const temps = forecasts.map(f => f.main.temp);
        const tempMins = forecasts.map(f => f.main.temp_min);
        const tempMaxs = forecasts.map(f => f.main.temp_max);

        // Extraindo a média ou valor mais comum das descrições
        const descriptions = forecasts.map(f => f.weather[0].description);
        const icons = forecasts.map(f => f.weather[0].icon);

        const mostCommon = arr => {
            return arr.sort((a,b) =>
                arr.filter(v => v === a).length - arr.filter(v => v === b).length
            ).pop();
        }

    return {
        date: new Date(forecasts[0].dt * 1000),
        temp_min: Math.min(...tempMins),
        temp_max: Math.max(...tempMaxs),
        description: mostCommon(descriptions),
        icon: mostCommon(icons),
    };
});

    return (
        <div className='weather-container'>
            <h3>Previsão dos Próximos 5 dias</h3>
            <div className='weather-list'>
            {next5DaysForecast.map((forecast, index) => (
                <div key={index} className='weather-item'>
                    <p className='forecast-day'>{forecast.date.toLocaleDateString('pt-BR', { weekday: 'long'})}</p>
                    <img src={`http://openweathermap.org/img/wn/${forecast.icon}.png`}/>
                    <p className='forecast-description'>{forecast.description}</p>
                    <p>{Math.round(forecast.temp_min)}ºC min / {Math.round(forecast.temp_max)}ºC max</p>
                </div>
            ))}
            </div>
        </div>
    )
}

export default WeatherInfo5Days;