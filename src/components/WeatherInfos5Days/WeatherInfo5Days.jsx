import './WeatherInfo5Days.css';

function WeatherInfo5Days ({ weather5Days }) {
    let dailyForecast = {}

    for(let forecast of weather5Days.data.list) {
        const date = new Date(forecast.dt * 1000).toLocaleDateString();

        if(!dailyForecast[date]) {
            dailyForecast[date] = forecast;
        }
    }

    const nextFiveDaysForecast = Object.values(dailyForecast).slice(1,6);

    function convertDate(date) {
        const newDate = new Date(date.dt * 1000).toLocaleDateString('pt-BR', { weekday: 'long' });

        return newDate;

    }

    return (
        <div className='weather-container'>
            <h3>Previsão dos Próximos 5 dias</h3>
            <div className='weather-list'>
            {nextFiveDaysForecast.map(forecast => (
                <div key={forecast.dt} className='weather-item'>
                    <p className='forecast-day'>{convertDate(forecast)}</p>
                    <img src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}/>
                    <p className='forecast-description'>{forecast.weather[0].description}</p>
                    <p>{Math.round(forecast.main.temp_min)}ºC min / {Math.round(forecast.main.temp_max)}ºC max</p>
                </div>
            ))}
            </div>
        </div>
    )
}

export default WeatherInfo5Days;